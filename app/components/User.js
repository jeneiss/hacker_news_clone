import React from 'react'
import queryString from 'query-string'
import { getUserInfo } from '../utils/api'
import Stories from './Stories'
import Loading from './Loading'

export default class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      userInfo: null,
      isLoading: true
    }

    this.handleFetch = this.handleFetch.bind(this)
  }

  componentDidMount() {
    this.setState({
      username: queryString.parse(location.search).id
    })
  }

  componentDidUpdate() {
    if (!this.state.userInfo) this.handleFetch()
  }

  handleFetch() {
    const { username } = this.state

    getUserInfo(username)
      .then((data) => {
        this.setState({
          userInfo: data.userInfo,
          userStories: data.userStories,
          isLoading: false
        })
      })
      .catch((err) => console.log(err, "Error fetching user info"))
  }

  render() {
    const { isLoading } = this.state

    if (isLoading) {
      return <Loading />
    }
    else {
      const { username, userInfo, userStories } = this.state
      const created = new Date(userInfo.created * 1000).toLocaleString()
      console.log(userStories)
      return (
          <>
            <div>
              <h1>{username}</h1>
              <div>joined {created} and has {userInfo.karma} karma</div>
            </div>
            <div>
              <h2>Recent stories</h2>
              <Stories stories={userStories} />
            </div>
          </>
      )
    }
  }
}

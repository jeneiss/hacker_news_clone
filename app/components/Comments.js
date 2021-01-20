import React from 'react'
import queryString from 'query-string'

import Loading from './Loading'
import { Link } from 'react-router-dom'
import { getComments } from '../utils/api'

export default class Comments extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      postId: null,
      comments: null,
      isLoading: true
    }
  }

  componentDidMount() {
    this.setState({postId: queryString.parse(location.search).id})
  }

  componentDidUpdate() {
    if (!this.state.comments) this.handleFetch()
  }

  handleFetch() {
    getComments(this.state.postId)
      .then((comments) => {
        this.setState({
          comments,
          isLoading: false
        })
      })
  }

  render() {
    const { comments, isLoading } = this.state

    if (isLoading) {
      return <Loading />
    } else {
      return (
        <ul>
          {comments.map((comment) => {
            const time = new Date(comment.time * 1000).toLocaleString()

            return (
              <li key={comment.id}>
                <div>by <Link to={`/user?id=${comment.by}`}>{comment.by}</Link> on {time}</div>
                <div dangerouslySetInnerHTML={{__html: comment.text}} />
              </li>
            )
          })}
        </ul>
      )
    }
  }
}

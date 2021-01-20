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
      postInfo: null,
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
      .then(({postInfo, comments}) => {
        this.setState({
          postInfo,
          comments,
          isLoading: false
        })
      })
  }

  render() {
    const { postInfo, comments, isLoading } = this.state

    if (isLoading) {
      return <Loading />
    } else {
      const date = new Date(postInfo.time * 1000).toLocaleString()

      return (
        <>
          <h1><a href={postInfo.url}>{postInfo.title}</a></h1>
          <div>
            <div>by <Link to={`/user?id=${postInfo.by}`}>{postInfo.by}</Link> on {date} with <Link to={`/post?id=${postInfo.id}`}>{postInfo.descendants}</Link> {postInfo.descendants === 1 ? 'comment' : 'comments'}</div>
          </div>
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
        </>
      )
    }
  }
}

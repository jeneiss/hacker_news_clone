import React, { useState, useEffect } from 'react'
import queryString from 'query-string'

import Loading from './Loading'
import Post from './Post'
import { Link } from 'react-router-dom'
import { getComments } from '../utils/api'

function Comments() {
  const [post, setPost ] = useState({postId: queryString.parse(location.search).id, postInfo: null, comments: null})
  const [ isLoading, setIsLoading ] = useState(true)

  const handleFetch = () => {
    getComments(post.postId)
      .then(({postInfo, comments}) => {
        setPost(prevState => (
          {
            ...prevState,
            postInfo,
            comments
          }
        ))
        setIsLoading(false)
      })
  }

  useEffect(() => {
    handleFetch()
  }, [isLoading])

  if (isLoading) {
    return <Loading />
  } else {
    return (
      <>
        <Post
          header={true}
          time={post.postInfo.time}
          id={post.postInfo.id}
          url={post.postInfo.url}
          text={post.postInfo.text}
          title={post.postInfo.title}
          by={post.postInfo.by}
          descendants={post.postInfo.descendants}
        />

        {post.comments &&
          <ul>
          {post.comments.map((comment) => {
            const time = new Date(comment.time * 1000).toLocaleString()

            return (
              <li className='comment' key={comment.id}>
                <div className='meta-info'>by <Link className='link' to={`/user?id=${comment.by}`}>{comment.by}</Link> on {time}</div>
                <div className='comment__text' dangerouslySetInnerHTML={{__html: comment.text}} />
              </li>
            )
          })}
        </ul>
        }
      </>
    )
  }
}

export default Comments

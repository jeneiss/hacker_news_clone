import React from 'react'
import { Link } from 'react-router-dom'

function Post({header, time, id, url, title, by, descendants, text}) {
  const date = new Date(time * 1000).toLocaleString()

  if (header) {
    return (
      <div className='header-post'>
        {url ?
          <h1>
            <a
              className='title-link'
              href={url}
            >
              {title}
            </a>
          </h1> :
          <>
            <h1>
              <Link
                className='title-link'
                to={`/post/${id}`}
              >
                {title}
              </Link>
            </h1>
            <div className='post__text' dangerouslySetInnerHTML={{__html: text}}></div>
          </>
        }
        <div className='meta-info'>
          by <Link to={`/user/${by}`}>{by}</Link> on {date} with <Link to={`/post/${id}`}>{descendants}</Link> {descendants === 1 ? 'comment' : 'comments'}
        </div>
      </div>
    )
  } else {
    return (
      <li>
        <div>
          {url ?
            <a
              className='title-link'
              href={url}
            >
              {title}
            </a> :
            <>
              <Link
                className='title-link'
                to={`/post/${id}`}
              >
                {title}
              </Link>
            </>
          }
        </div>
        <div className='meta-info'>
          by <Link className='link' to={`/user/${by}`}>{by}</Link> on {date} with <Link className='link' to={`/post/${id}`}>{descendants}</Link> {descendants === 1 ? 'comment' : 'comments'}
        </div>
      </li>
    )
  }
}

export default Post

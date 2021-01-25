import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({header, time, id, url, title, by, descendants, text}) {
  const date = new Date(time * 1000).toLocaleString()

  if (header) {
    return (
      <div>
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
                to={`/post?id=${id}`}
              >
                {title}
              </Link>
            </h1>
            <div dangerouslySetInnerHTML={{__html: text}}></div>
          </>
        }
        <div>
          by <Link to={`/user?id=${by}`}>{by}</Link> on {date} with <Link to={`/post?id=${id}`}>{descendants}</Link> {descendants === 1 ? 'comment' : 'comments'}
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
                to={`/post?id=${id}`}
              >
                {title}
              </Link>
            </>
          }
        </div>
        <div>
          by <Link className='link' to={`/user?id=${by}`}>{by}</Link> on {date} with <Link className='link' to={`/post?id=${id}`}>{descendants}</Link> {descendants === 1 ? 'comment' : 'comments'}
        </div>
      </li>
    )
  }
}

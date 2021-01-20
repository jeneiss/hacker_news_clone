import React from 'react'
import { Link } from 'react-router-dom'

export default function Post({time, id, url, title, by, descendants}) {
  const date = new Date(time * 1000).toLocaleString()

  return (
    <li>
      <div>
        <a href={url}>{title}</a>
      </div>
      <div>
        by <Link to={`/user?id=${by}`}>{by}</Link> on {date} with <Link to={`/post?id=${id}`}>{descendants}</Link> {descendants === 1 ? 'comment' : 'comments'}
      </div>
    </li>
  )
}

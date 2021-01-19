import React from 'react'
import { Link } from 'react-router-dom'

export default function Stories({ stories }) {
  return stories.map((story) => {
    const date = new Date(story.time * 1000).toLocaleString()

    return (
      <li key={story.id}>
        <div>
          <a href={story.url}>{story.title}</a>
        </div>
        <div>
          <div>by <Link to={`/user?id=${story.by}`}>{story.by}</Link> on {date} with <Link to={`/post?id=${story.id}`}>{story.descendants}</Link> {story.descendants === 1 ? 'comment' : 'comments'}</div>
        </div>
      </li>
    )
  })
}

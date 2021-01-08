import React from 'react'

export default function Stories({ stories }) {
  return stories.map((story) => {
    const date = new Date(story.time * 1000).toLocaleString()

    return (
      <li key={story.id}>
        <div>
          <a href={story.url}>{story.title}</a>
        </div>
        <div>
          <div>by {story.by} on {date} with {story.descendants} {story.descendants === 1 ? 'comment' : 'comments'}</div>
        </div>
      </li>
    )
  })
}

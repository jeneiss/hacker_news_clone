import React from 'react'
import Post from './Post'

export default function Stories({ stories }) {
  return stories.map((story) => {
    return (
      <Post
        key={story.id}
        time={story.time}
        id={story.id}
        url={story.url}
        title={story.title}
        by={story.by}
        descendants={story.descendants}
      />
    )
  })
}

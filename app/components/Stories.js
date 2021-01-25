import React from 'react'
import Post from './Post'

export default function Stories({ stories }) {
  const storyList = stories.map((story) => {
    return (
      <Post
        header={false}
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

  return (
    <ul>
      {storyList}
    </ul>
  )
}

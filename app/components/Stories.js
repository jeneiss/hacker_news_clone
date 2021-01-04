import React from 'react'
import Loading from './Loading'

export default function Stories(props) {

  if (props.stories[props.type]) {
    return props.stories[props.type].map((story) => {
      return (
        <li key={story.id}>
          <a href={story.url}>{story.title}</a>
          <div>
            <div>by {story.by} on DATE with {story.descendants} comments</div>
          </div>
        </li>
      )
    })
  } else {
    return <Loading />
  }
}

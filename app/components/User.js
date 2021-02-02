import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Stories from './Stories'
import Loading from './Loading'

import { getUserInfo } from '../utils/api'

function User() {
  const { id } = useParams()
  const [user, setUser ] = useState({name: id, stories: null, info: null})
  const [ isLoading, setIsLoading ] = useState(true)

  const handleFetch = () => {
    getUserInfo(user.name)
      .then((data) => {
        setUser(prevState => (
          {
            ...prevState,
            info: data.userInfo,
            stories: data.userStories
          }
        ))
        setIsLoading(false)
      })
      .catch((err) => console.log(err, "Error fetching user info"))
  }

  useEffect(() => {
    handleFetch()
  }, [isLoading])

  if (isLoading) {
    return <Loading />
  }
  else {
    const { name, info, stories } = user
    const created = new Date(info.created * 1000).toLocaleString()

    return (
        <div className='user'>
          <div>
            <h1>{name}</h1>
            <div className='meta-info'>joined <strong>{created}</strong> and has <strong>{info.karma}</strong> karma</div>
            {info.about && <div className='about-info' dangerouslySetInnerHTML={{__html: info.about}}></div>}
          </div>
          {stories.length === 0 ?
            <h2>No recent stories</h2> :
            <div>
              <h2>Recent stories</h2>
              <Stories stories={stories} />
            </div>
          }
        </div>
    )
  }
}

export default User

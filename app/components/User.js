import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import Stories from './Stories'
import Loading from './Loading'

import { getUserInfo } from '../utils/api'

function User() {
  const [user, setUser ] = useState({name: queryString.parse(location.search).id, stories: null, info: null})
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
// export default class User extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       username: '',
//       userInfo: null,
//       isLoading: true
//     }

//     this.handleFetch = this.handleFetch.bind(this)
//   }

//   componentDidMount() {
//     this.setState({
//       username: queryString.parse(location.search).id
//     })
//   }

//   componentDidUpdate() {
//     if (!this.state.userInfo) this.handleFetch()
//   }

//   handleFetch() {
//     const { username } = this.state

//     getUserInfo(username)
//       .then((data) => {
//         this.setState({
//           userInfo: data.userInfo,
//           userStories: data.userStories,
//           isLoading: false
//         })
//       })
//       .catch((err) => console.log(err, "Error fetching user info"))
//   }

//   render() {
//     const { isLoading } = this.state

//     if (isLoading) {
//       return <Loading />
//     }
//     else {
//       const { username, userInfo, userStories } = this.state
//       const created = new Date(userInfo.created * 1000).toLocaleString()

//       return (
//           <div className='user'>
//             <div>
//               <h1>{username}</h1>
//               <div className='meta-info'>joined <strong>{created}</strong> and has <strong>{userInfo.karma}</strong> karma</div>
//               {userInfo.about && <div className='about-info' dangerouslySetInnerHTML={{__html: userInfo.about}}></div>}
//             </div>
//             {userStories.length === 0 ?
//               <h2>No recent stories</h2> :
//               <div>
//                 <h2>Recent stories</h2>
//                 <Stories stories={userStories} />
//               </div>
//             }
//           </div>
//       )
//     }
//   }
// }

const url = 'https://hacker-news.firebaseio.com/v0/'

function removeInactiveItems(data) {
  return data.filter((item) => !item.dead && !item.deleted)
}

function getItems(data) {
  const itemList = data.map((itemId) => {
    return fetch(`${url}item/${itemId}.json?print=pretty`)
      .then((items) => items.json())
      .catch((err) => console.log(err, 'Error fetching items'))
  })

  return Promise.all(removeInactiveItems(itemList)).then((items) => items)
}

export function getStories(type) {
  return fetch(`${url}${type}stories.json?print=pretty`)
    .then((response) => response.json())
    .then((data) => getItems(data.slice(0, 30)))
    .catch((err) => console.log(err, 'Error fetching stories'))
}

export function getUserInfo(user) {
  return fetch(`${url}user/${user}.json?print=pretty`)
    .then((response) => response.json())
    .then((data) => {
      return getItems(data.submitted.slice(0, 20))
        .then((res) => {
          res = res.filter((res) => res.type === 'story')
          return {userInfo: data, userStories: res}
        })
    })
    .catch((err) => console.log(err, 'Error fetching user info'))
}

export function getComments(id) {
  return fetch(`${url}item/${id}.json?print=pretty`)
    .then((response) => response.json())
    .then((data) => {
      if (data.descendants === 0) {
        return {postInfo: data, comments: undefined}
      }

      return getItems(data.kids)
        .then((res) => ({postInfo: data, comments: res}))
    })
    .catch((err) => console.log(err, 'Error fetching comments'))
}

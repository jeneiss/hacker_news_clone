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
    .then((data) => getItems(data.slice(0, 50)))
    .catch((err) => console.log(err, 'Error fetching stories'))
}

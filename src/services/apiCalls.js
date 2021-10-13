export const createUser = (user) => {
  return fetch('http://localhost:3012/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(data => data.json())
    .then(result => result)
    .catch(err => err)
}

export const signinUser = (user) => {
  return fetch('http://localhost:3012/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
    .then(data => data.json())
    .then(result => {
      sessionStorage.setItem('username', result.user.username)
      sessionStorage.setItem('user_id', result.user.id)
      sessionStorage.setItem('antiquity', result.user.created_at)
      result.user.logged = true
      return result
    })
    .catch(err => err)
}

export const getAllBooks = (page, order, direction) => {
  return fetch(`http://localhost:3012/books?page=${page}&order=${order}&direction=${direction}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}

export const deleteBook = (id) => {
  const data = {
    id
  }

  return fetch('http://localhost:3012/books', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}

export const getAllReviews = (idBook) => {
  return fetch(`http://localhost:3012/book_reviews/${idBook}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}

export const deleteReview = (idReview) => {
  const data = {
    id: idReview
  }

  return fetch('http://localhost:3012/review', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    .then(response => response)
    .catch(err => err)
}

export const getSpecificReview = (idReview) => {
  return fetch(`http://localhost:3012/review/${idReview}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(result => result.json())
    .then(data => data)
    .catch(err => err)
}

export const updateReview = (id, valoration, textReview, idUser) => {
  const data = {
    id,
    valoration,
    text_review: textReview,
    id_user: idUser
  }
  return fetch('http://localhost:3012/review', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}

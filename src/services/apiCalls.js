/** ********** LLAMADAS DE AUTH ************/
// Crear usuario
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
// Autenticar usuario
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
// Eliminar usuario
export const deleteUser = (data) => {
  return fetch('http://localhost:3012/delete_account', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    .then(response => response)
    .catch(err => err)
}
/** ********** LLAMADAS DE AUTH ************/

/** ********** LLAMADAS DE LIBROS ************/
// Obtener todos los libros con paginación
export const getAllBooks = (page, order, direction) => {
  return fetch(`http://localhost:3012/books?page=${page}&order=${order}&direction=${direction}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}
// Obtener un libro específico
export const getSpecificBook = (id) => {
  return fetch(`http://localhost:3012/book/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}
// Eliminar libro
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
// Actualizar libro
export const updateBook = (data) => {
  return fetch('http://localhost:3012/books', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}
// Añadir libro
export const createNewBook = (data) => {
  return fetch('http://localhost:3012/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}
// Obtener libro por titulo
export const getBookByTitle = (title) => {
  return fetch(`http://localhost:3012/book-title/${title}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}
// Obtener libros de usuario
export const getBooksOfUser = (userId) => {
  return fetch(`http://localhost:3012/books/${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(result => result.json())
    .then(response => response)
    .catch(err => err)
}
/** ********** LLAMADAS DE LIBROS ************/

/** ********** LLAMADAS DE RESEÑAS ************/
// Obtener todas las reseñas de un libro
export const getAllReviews = (idBook) => {
  return fetch(`http://localhost:3012/book_reviews/${idBook}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}
// Eliminar reseña
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
// Obtener una reseña específica
export const getSpecificReview = (idReview) => {
  return fetch(`http://localhost:3012/review/${idReview}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}
// Actualizar reseña
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
// Añadir reseña
export const addReview = (data) => {
  return fetch('http://localhost:3012/review', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    .then(data => data)
    .catch(err => err)
}
// Obtener reseñas de un usuario
export const getReviewsOfUser = (userId) => {
  return fetch(`http://localhost:3012/user_reviews/${userId}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(result => result.json())
    .then(response => response)
    .catch(err => err)
}
/** ********** LLAMADAS DE RESEÑAS ************/

/* Actualizar las valoraciones del libro */
export const calculateAverage = (values) => {
  console.log(values)

  const numValues = values.length
  let sumValues = 0
  values.forEach((val) => {
    sumValues += val
  })
  return sumValues / numValues
}

/* Quiza debamos añadir otro campo a la tabla que sea average global y modificar algunas cosas
 */

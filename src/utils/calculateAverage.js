/* Función para calcular media de libro */
export const calculateAverage = (values) => {
  const numValues = values.length
  let sumValues = 0
  values.forEach((val) => {
    sumValues += val
  })
  return sumValues / numValues
}

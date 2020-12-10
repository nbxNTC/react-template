const handleCleanCurrency = (value) => {
  let newValue = String(value)
  newValue = newValue.replace(/R/g, '')
  newValue = newValue.replace(/\$/g, '')
  newValue = newValue.replace(/\s/g, '')
  newValue = newValue.replace(/\./g, '')
  newValue = newValue.replace(/\,/g, '')
  
  return Number(newValue)
}

export default handleCleanCurrency
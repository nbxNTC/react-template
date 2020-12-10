const handleMaskCurrency = (value) => {
  let parsedValue = value

  parsedValue = parsedValue.replace(/\s/g, '')
  parsedValue = parsedValue.replace(/\./g, '')
  parsedValue = parsedValue.replace(/\,/g, '')
  parsedValue = parsedValue.replace('R$', '')

  let length = parsedValue.length
  let updatedValue = ''

  if (!/^[0-9]*$/.test(parsedValue)) {
    parsedValue = parsedValue.slice(0, length - 1)
    length = parsedValue.length
  }

  if (length === 1) {
    return 'R$0,0' + parsedValue[0]
  } else if (length === 2) {
    return `R$0,${parsedValue.slice(0, 2)}`
  } else {
    if (length <= 5 && parsedValue[0] === '0') {
      parsedValue = parsedValue.slice(1, length)
      length = parsedValue.length
    }

    let j = 0

    for (let i = length - 3; i >= 0 ; i--) {
      if (j === 2 && i >= 1) {
        updatedValue = '.' + parsedValue[i] + updatedValue
        j = 0
      } else {
        updatedValue = parsedValue[i] + updatedValue
        j++
      }
    }
    return 'R$' + updatedValue + ',' + parsedValue.slice(length - 2, length)
  }
}

export default handleMaskCurrency
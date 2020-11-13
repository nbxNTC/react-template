export const parsePhone = (phoneNumber) => {
  let updatedPhoneNumber = phoneNumber
  updatedPhoneNumber = updatedPhoneNumber.replace(/_/g, '')
  updatedPhoneNumber = updatedPhoneNumber.replace(/-/g, '')
  updatedPhoneNumber = updatedPhoneNumber.replace(/\s/g, '')
  updatedPhoneNumber = updatedPhoneNumber.replace(/\(/g, '')
  updatedPhoneNumber = updatedPhoneNumber.replace(/\)/g, '')

  if (updatedPhoneNumber.length <= 10) {
    return '(' + updatedPhoneNumber.slice(0, 2) + ') ' +
      updatedPhoneNumber.slice(2, 6) + '-' +
      updatedPhoneNumber.slice(6, 10)
  } else {
    return '(' + updatedPhoneNumber.slice(0, 2) + ') ' +
      updatedPhoneNumber.slice(2, 7) + '-' +
      updatedPhoneNumber.slice(7, 11)
  }
}
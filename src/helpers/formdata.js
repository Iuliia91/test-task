import axios from 'axios'
export const initialData = {
  name: '',
  email: '',
  phone: '',
  position_id: '',
  photo: '',
}

export function validateEmail(email) {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  if (re.test(String(email).toLowerCase())) {
    return true
  } else {
    return false
  }
}

export const validationFunction = (formValues) => {
  const errorObj = {}
  let isValid = true
  if (!formValues.name) {
    isValid = false
    errorObj.name = 'fill the fields'
  } else if (formValues.name.length < 2) {
    isValid = false
    errorObj.name = 'The name must be at least 2 charcters'
  } else if (formValues.name.length > 60) {
    isValid = false
    errorObj.name = 'The name must be less then 60 charcters'
  } else if (!formValues.email) {
    isValid = false
    errorObj.email = 'fill the fields'
  } else if (!validateEmail(formValues.email)) {
    isValid = false
    errorObj.email = 'write correct email'
  } else if (!formValues.phone) {
    isValid = false
    errorObj.phone = 'fill the fields'
  } else if (formValues.phone.includes('_')) {
    isValid = false
    errorObj.phone = 'write correct number'
  } else if (!formValues.position_id) {
    isValid = false
    errorObj.position_id = 'choose position'
  } else if (!formValues.photo) {
    isValid = false
    errorObj.photo = 'fill the fields'
  } else if (!formValues.photo.type.includes('image/jpeg')) {
    errorObj.photo = 'select valid image .jpg/.jpeg'
  } else if (formValues.photo.size <= 1024 * 5) {
    console.log(typeof formValues.photo.size)
    console.log('not allow size')
    errorObj.photo = 'size'
  }
  return errorObj
}

export const formDataValue = (formValues, file) => {
  let formData = new FormData()
  const regEx = /[^\d\+]/g
  let b = formValues.phone.replace(regEx, '')
  let email = formValues.email.toLowerCase()
  console.log(email)
  formData.append('name', `${formValues.name}`)
  formData.append('email', `${email}`)
  formData.append('phone', `${b}`)
  formData.append('position_id', `${formValues.position_id}`)
  formData.append('photo', formValues.photo)

  return formData
}

export const getToken = async () => {
  return axios
    .get('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(({ data }) => {
      return data
    })
    .catch(() => console.log('not good'))
}

export const postData = async (formData) => {
  const token = await getToken()

  return await axios({
    method: 'POST',
    url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
    headers: {
      Token: token.token,
      'Content-type': 'multipart/form-data',
    },

    data: formData,
  })
    .then((response) => {
      return response.data.message
    })

    .catch((error) => {
      return error.response.data.message
    })
}

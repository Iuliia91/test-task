import axios from 'axios'

export const getData = (url) => {
  if (url === null) {
    return console.log('finished')
  } else {
    return axios
      .get(url)
      .then(({ data }) => {
        return data
      })
      .catch((e) => alert('smt went wrong'))
  }
}

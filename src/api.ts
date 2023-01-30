import axios from 'axios'

let _token = window.localStorage.token

const api_url = "http://localhost:3333"

const api = axios.create({
  baseURL: api_url
})

export const setToken = (token: string) => {
  _token = token
  window.localStorage.setItem("token", token)
}

export const getToken = () => {
  return _token
}

api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = "Bearer " + getToken()
    // config.headers = {
    //     ...(config.headers || {}),
    //     Authorization: "Bearer " + getToken()
    // }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default api

import axios from '@/api'

export function githubLogin (code) {
  return axios.get(`/githubToken?code=${code}`)
}

export function qqLogin (params) {
  return axios.post(`/qq-login/`, params)
}

export function getUserInfoByToken () {
  return axios.get('/get-self/')
}

export function getUserInfoById (id) {
  return axios.get(`/get-user/${id}`)
}

export function getUserDetail (id) {
  return axios.get(`/get-user-detail/${id}`)
}

export function checkAdmin () {
  return axios.get('/check-admin/')
}

export function getAdminInfo () {
  return axios.get('/get-user-info/')
}

export function setEmail (data) {
  return axios.post('/set-email/', data)
}

export function searchUsers (keyword) {
  return axios.post('/search-user/', { keyword })
}


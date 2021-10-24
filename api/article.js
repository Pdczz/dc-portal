import axios from '/api'

export function getArticlesByPage(page) {
  return axios.get(`/page?pid=${page}`)
}
export function getArticleById(id) {
  return axios.get(`/article?id=${id}`)
}

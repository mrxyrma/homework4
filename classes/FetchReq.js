export default class FetchReq {
  constructor(url) {
    this.url = url
    this.headers = { 'Content-Type': 'application/json' }
  }

  fetchReq(method, id = null, body = null) {
    fetch(id ? `${this.url}/${id}` : this.url, {
      method: method,
      headers: this.headers,
      body: body ? JSON.stringify(body) : null,
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => console.log(data))
        } else {
          console.log(`Ошибка ${response.status}: ${response.statusText}`)
        }
      })
      .catch((e) => console.log(e))
  }

  getAllTasks() {
    this.fetchReq('GET')
  }

  getOneTask(id) {
    this.fetchReq('GET', id)
  }

  postOneTask(body) {
    this.fetchReq('POST', null, body)
  }

  deleteOneTask(id) {
    this.fetchReq('DELETE', id)
  }

  patchOneTask(id, body) {
    this.fetchReq('PATCH', id, body)
  }
}

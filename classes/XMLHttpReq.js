export default class XMLHttpReq {
  constructor(url) {
    this.url = url
  }

  xmlHttpReq(method, id = null, body = null) {
    const request = new XMLHttpRequest()
    request.open(method, id ? `${this.url}/${id}` : this.url)
    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8')
    request.send(JSON.stringify(body))

    request.addEventListener('load', () => {
      if (request.status.toString().slice(0, 1) === '2') {
        const data = JSON.parse(request.response)
        console.log(data)
      } else {
        console.log(`Ошибка ${request.status}: ${request.statusText}`)
      }
    })
  }

  getAllTasks() {
    this.xmlHttpReq('GET')
  }

  getOneTask(id) {
    this.xmlHttpReq('GET', id)
  }

  postOneTask(body) {
    this.xmlHttpReq('POST', null, body)
  }

  deleteOneTask(id) {
    this.xmlHttpReq('DELETE', id)
  }

  patchOneTask(id, body) {
    this.xmlHttpReq('PATCH', id, body)
  }
}

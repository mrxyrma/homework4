import XMLHttpReq from './classes/XMLHttpReq.js'
import FetchReq from './classes/FetchReq.js'

const body = {
  name: 'some name',
  info: 'Initial object',
  isImportant: true,
  isCompleted: false,
}

const patchedBody = {
  info: 'Patched object',
}

class Controller1 extends XMLHttpReq {
  constructor(url = 'http://37.220.80.108/tasks') {
    super(url)
  }
}
//Примеры использования
const XMLHttpController = new Controller1()
XMLHttpController.getAllTasks()
XMLHttpController.getOneTask(5)
XMLHttpController.postOneTask(body)
XMLHttpController.patchOneTask(10, patchedBody)
XMLHttpController.deleteOneTask(10)

class Controller2 extends FetchReq {
  constructor(url = 'http://37.220.80.108/tasks') {
    super(url)
  }
}
//Примеры использования
const FetchController = new Controller2()
FetchController.getAllTasks()
FetchController.getOneTask(5)
FetchController.postOneTask(body)
FetchController.patchOneTask(10, patchedBody)
FetchController.deleteOneTask(10)

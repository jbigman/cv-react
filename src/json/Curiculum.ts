import curiculum from './curiculum.json'
import { type ICuriculum } from '../Interface/ICuriculum'

// Used to load a local json file, but it could be loaded from rest services...
class Curiculum {
  public data: ICuriculum

  constructor () {
    this.data = curiculum
  }
}

export default new Curiculum()

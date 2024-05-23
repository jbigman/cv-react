import type { ICuriculum } from '../Interface/ICuriculum'
import curiculum from './curiculum.json'

// Used to load a local json file, but it could be loaded from rest services...
class Curiculum {
  public data: ICuriculum

  constructor() {
    this.data = curiculum
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Curiculum()

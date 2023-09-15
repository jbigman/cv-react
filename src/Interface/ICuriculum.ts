import { type ISkills } from './ISkills'
import { type IExperience } from './IExperience'

export interface ICuriculum {
  'nom': string
  'prenom': string
  'address'?: string
  'email'?: string
  'phone'?: string
  'githubUrl'?: string
  'stackOverFlowUrl'?: string
  'drivingLicence'?: string

  'experiences': IExperience[]
  'formations': IExperience[]
  skills: ISkills
}

import type { IExperience } from './IExperience'
import type { ISkills } from './ISkills'

export interface ICuriculum {
  nom: string
  prenom: string
  address?: string
  email?: string
  phone?: string
  githubUrl?: string
  stackOverFlowUrl?: string
  drivingLicence?: string

  experiences: IExperience[]
  formations: IExperience[]
  skills: ISkills
}

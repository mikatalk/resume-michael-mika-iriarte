export interface Language {
  name: string
  text: string
}
export interface Education {
  name: string
  text: string
  dates: string
}
export interface Skill {
  name: string
  skills: string[]
}
export interface ExperienceSection {
  name: string
  text: string
}
export interface Experience {
  'company-name': string
  'job-title': string
  'location': string
  'role-description': string
  'gig-duration': string,
  sections: ExperienceSection[]
}

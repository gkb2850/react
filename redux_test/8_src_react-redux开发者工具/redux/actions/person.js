import { ADD_PERSON } from '../constant'

export const creatAddPersonAction = personObj => ({type: ADD_PERSON, data: personObj})
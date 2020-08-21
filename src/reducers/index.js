import projects from './projects'
import skills from './skills'

import { combineReducers } from 'redux'

const root = combineReducers({
  skills,
  projects
})

export default root
import { combineReducers } from 'redux'
import StudentsReducer from './students_reducer'

const rootReducer = combineReducers({
  students: StudentsReducer
})

export default rootReducer
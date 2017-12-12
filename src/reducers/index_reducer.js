import { combineReducers } from 'redux'
import StudentsReducer from './students_reducer'
import { reducer } from 'redux-form'

const rootReducer = combineReducers({
  students: StudentsReducer, //<-- Students
  form: reducer // <-- redux-form
});

export default rootReducer
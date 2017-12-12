import * as actions from '../actions/student_actions';

  const INITIAL_STATE = { 
                          studentsList:  { students: [], error:null, loading: false },  
							            newStudent: { student:null, error: null, loading: false }, 
							            activeStudent: { student:null, error:null, loading: false }, 
							            deletedStudent: { student: null, error:null, loading: false },
						            }

export default function(state = INITIAL_STATE, action) {
  let error;
  switch(action.type) {
  
  case actions.FETCH_STUDENTS:
  	return { ...state, studentsList: {students:[], error: null, loading: true} }; 
  case actions.FETCH_STUDENTS_SUCCESS:
    return { ...state, studentsList: {students: action.payload, error:null, loading: false} };
  case actions.FETCH_STUDENTS_FAILURE:
    error = action.payload || {message: action.payload.message}; //2nd one is network or server down errors
    return { ...state, studentsList: {students: [], error: error, loading: false} };
  case actions.RESET_STUDENTS:
    return { ...state, studentsList: {students: [], error:null, loading: false} };

  case actions.FETCH_STUDENT:
    return { ...state, activeStudent:{...state.activeStudent, loading: true}};
  case actions.FETCH_STUDENT_SUCCESS:
    return { ...state, activeStudent: {student: action.payload, error:null, loading: false}};
  case actions.FETCH_STUDENT_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, activeStudent: {student: null, error:error, loading:false}};
  case actions.RESET_ACTIVE_STUDENT:
    return { ...state, activeStudent: {student: null, error:null, loading: false}};

  case actions.CREATE_STUDENT:
  	return {...state, newStudent: {...state.newStudent, loading: true}}
  case actions.CREATE_STUDENT_SUCCESS:
  	return {...state, newStudent: {student:action.payload, error:null, loading: false}}
  case actions.CREATE_STUDENT_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
  	return {...state, newStudent: {student:null, error:error, loading: false}}
  case actions.RESET_NEW_STUDENT:
    return {...state,  newStudent:{student:null, error:null, loading: false}}
    
  case actions.DELETE_STUDENT:
   	return {...state, deletedStudent: {...state.deletedStudent, loading: true}}
  case actions.DELETE_POST_SUCCESS:
  	return {...state, deletedStudent: {student:action.payload, error:null, loading: false}}
  case actions.DELETE_STUDENT_FAILURE:
    error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
  	return {...state, deletedStudent: {student:null, error:error, loading: false}}
  case actions.RESET_DELETED_STUDENT:
  	return {...state,  deletedStudent:{student:null, error:null, loading: false}}
  default:
    return state;
  }
}
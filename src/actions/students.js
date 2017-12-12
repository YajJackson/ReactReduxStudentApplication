import axios from 'axios'

//student list
export const FETCH_STUDENTS = 'FETCH_STUDENTS'
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS'
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE'
export const RESET_STUDENTS = 'RESET_STUDENTS'

//Create new student
export const CREATE_STUDENT = 'CREATE_STUDENT'
export const CREATE_STUDENT_SUCCESS = 'CREATE_STUDENT_SUCCESS'
export const CREATE_STUDENT_FAILURE = 'CREATE_STUDENT_FAILURE'
export const RESET_NEW_STUDENT = 'RESET_NEW_STUDENT'

//Fetch student
export const FETCH_STUDENT = 'FETCH_STUDENT'
export const FETCH_STUDENT_SUCCESS = 'FETCH_STUDENT_SUCCESS'
export const FETCH_STUDENT_FAILURE = 'FETCH_STUDENT_FAILURE'
export const RESET_ACTIVE_STUDENT = 'RESET_ACTIVE_STUDENT'

//Delete student
export const DELETE_STUDENT = 'DELETE_STUDENT'
export const DELETE_STUDENT_SUCCESS = 'DELETE_STUDENT_SUCCESS'
export const DELETE_STUDENT_FAILURE = 'DELETE_STUDENT_FAILURE'
export const RESET_DELETED_STUDENT = 'RESET_DELETED_STUDENT'


const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:4567/api' : '/api'

export function fetchStudents() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/students`
  });

  return {
    type: FETCH_STUDENTS,
    payload: request
  };
}

export function fetchStudentsSuccess(students) {
  return {
    type: FETCH_STUDENTS_SUCCESS,
    payload: students
  };
}

export function fetchStudentsFailure(error) {
  return {
    type: FETCH_STUDENTS_FAILURE,
    payload: error
  };
}

export function resetStudentFields() {
  return {
    type: RESET_STUDENT_FIELDS
  }
}

export function createStudent(props) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/students`
  });

  return {
    type: CREATE_STUDENT,
    payload: request
  };
}

export function createStudentSuccess(newStudent) {
  return {
    type: CREATE_STUDENT_SUCCESS,
    payload: newStudent
  };
}

export function createStudentFailure(error) {
  return {
    type: CREATE_STUDENT_FAILURE,
    payload: error
  };
}

export function resetNewStudent() {
  return {
    type: RESET_NEW_STUDENT
  }
}

export function resetDeletedStudent() {
  return {
    type: RESET_DELETED_STUDENT
  }
}

export function fetchStudent(id) {
  const request = axios.get(`${ROOT_URL}/students/${id}`);

  return {
    type: FETCH_STUDENT,
    payload: request
  };
}

export function fetchStudentSuccess(activeStudent) {
  return {
    type: FETCH_STUDENT_SUCCESS,
    payload: activeStudent
  };
}

export function fetchStudentFailure(error) {
  return {
    type: FETCH_STUDENT_FAILURE,
    payload: error
  };
}

export function resetActiveStudent() {
  return {
    type: RESET_ACTIVE_STUDENT
  }
}

export function deleteStudent(id) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/students/${id}`
  });

  return {
    type: DELETE_STUDENT,
    payload: request
  };
}

export function deleteStudentSuccess(deletedStudent) {
  return {
    type: DELETE_STUDENT_SUCCESS,
    payload: deletedStudent
  };
}

export function deleteStudentFailure(response) {
  return {
    type: DELETE_STUDENT_FAILURE,
    payload: response
  };
}

import {
    SET_FNAME,
    SET_LNAME,
    SET_EMAIL_ID,
    SET_MOBILE_NO,
    SET_PASSWORD,
    SET_CONFRIM_PASSWORD,
  } from './actions';
  
  const initialState = {
    fname: '',
    lname: '',
    emailid: '',
    mobileno: '',
    password: '',
    confrimpassword: '',
  };
  
  export const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FNAME:
        return {...state, fname: action.payload};
      case SET_LNAME:
        return {...state, lname: action.payload};
      case SET_EMAIL_ID:
        return {...state, emailid: action.payload};
      case SET_MOBILE_NO:
        return {...state, mobileno: action.payload};
      case SET_PASSWORD:
        return {...state, password: action.payload};
      case SET_CONFRIM_PASSWORD:
        return {...state, confrimpassword: action.payload};
      default:
        return state;
    }
  };
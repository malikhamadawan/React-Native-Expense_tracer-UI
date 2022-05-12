export const SET_FNAME = 'SET_FNAME';
export const SET_LNAME = 'SET_LNAME';
export const SET_EMAIL_ID = 'SET_EMAIL_ID';
export const SET_MOBILE_NO = 'SET_MOBILE_NO';
export const  SET_PASSWORD = ' SET_PASSWORD';
export const SET_CONFRIM_PASSWORD = 'SET_CONFRIM_PASSWORD';

export const setfName = fname => dispatch => {
  dispatch({
    type: SET_FNAME,
    payload: fname,
  });
};

export const setlName = lname => dispatch => {
  dispatch({
    type: SET_LNAME,
    payload: lname,
  });
};
export const setEmail = emailid => dispatch => {
  dispatch({
    type: SET_EMAIL_ID,
    payload: emailid,
  });
};
export const setMobileNo = mobileno => dispatch => {
  dispatch({
    type: SET_MOBILE_NO,
    payload: mobileno,
  });
};
export const setPassword = password => dispatch => {
  dispatch({
    type:  SET_PASSWORD,
    payload: password,
  });
};
export const setConfrimPassword = confrimpassword => dispatch => {
  dispatch({
    type: SET_CONFRIM_PASSWORD,
    payload: confrimpassword,
  });
};
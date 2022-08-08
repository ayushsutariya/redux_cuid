export const SignupAction = (data) => (dispatch) => {
    dispatch({type: 'SIGNUPUSER' , payload: data})
}

export const EMAIL_VERIFICATION = (data) => (dispatch) => {
    dispatch({type: "EMAIL_VERIFICATION", user: data})
}
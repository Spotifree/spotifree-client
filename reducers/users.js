let initialState = {
  isLogin: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {...state, isLogin: action.payload}
      break;
    case 'USER_SIGNUP1':
      return {...state, signup: action.payload}
      break;
  
    default:
    return state
      break;
  }
}
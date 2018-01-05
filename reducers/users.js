let initialState = {
  isLogin: false,
  userCreated: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {...state, isLogin: action.payload}
      break;
    case 'USER_SIGNUP1':
      return {...state, signup: action.payload}
      break;
    case 'USER_SIGNUP2':
      console.log('reducers', action.payload)
      return {...state, userCreated: action.payload}
      break;
    default:
    return state
      break;
  }
}
let initialState = {
  access_token: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return {...state, access_token: action.payload}
      break;
  
    default:
    return state
      break;
  }
}
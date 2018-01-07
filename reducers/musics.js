let initialState = {
  allMusics: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'ALL_MUSICS':
      return {...state, allMusics: action.payload}
      break;
    default:
    return state
      break;
  }
}
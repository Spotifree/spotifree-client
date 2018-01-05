import axios from 'axios'
import jwtDecode from 'jwt-decode'

export function userLogin(payload) {
  return {
    type: 'USER_LOGIN',
    payload
  }
}

export function userSignup1(payload) {
  return {
    type: 'USER_SIGNUP1',
    payload
  }
}

export function userSignup2(payload) {
  console.log('actions')
  return {
    type: 'USER_SIGNUP2',
    payload
  }
}

function getById(token, dispatch) {
  console.log('byid')
  var decoded = jwtDecode(token);
  axios.get('http://ec2-34-216-118-112.us-west-2.compute.amazonaws.com/users/'+decoded.id,{
    headers: {
      access_token: token
    }
  })
  .then(({data}) => {
    console.log('by id ', data)
    dispatch(userLogin(true))
  })
}

export function login(dataUser) {
  return dispatch => {
    axios.post('http://ec2-34-216-118-112.us-west-2.compute.amazonaws.com/users/login', dataUser)
    .then(({data}) => {
      getById(data.access_token, dispatch)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export function signup(dataUser) {
  return dispatch => {
    axios.post('http://ec2-34-216-118-112.us-west-2.compute.amazonaws.com/users/signup', dataUser)
    .then(({data}) => {
      console.log(data)
      dispatch(userSignup2(true))
    })
    .catch(err => {
      console.log(err)
    })

  }
}
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export function userLogin(payload) {
  return {
    type: 'USER_LOGIN',
    payload
  }
}

function getById(token) {
  var decoded = jwtDecode(token);
  axios.get('http://ec2-34-216-118-112.us-west-2.compute.amazonaws.com/users/'+decoded.id,{
    headers: {
      access_token: token
    }
  })
  .then(({data}) => {
    console.log('by id ', data)
  })
}

export function login(dataUser) {
  console.log(dataUser)
  return dispatch => {
    axios.post('http://ec2-34-216-118-112.us-west-2.compute.amazonaws.com/users/login',{
      username: dataUser.username,
      password: dataUser.password
    })
    .then(({data}) => {
      console.log(data)
      getById(data.access_token)
      dispatch(userLogin(data.access_token))
    })
    .catch(err => {
      console.log(err)
    })
  }
}
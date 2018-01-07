import Realm from 'realm'

class User {}

User.schema = {  
  name: 'User',
  primaryKey: 'userId',
  properties: {
    userId: 'string',
    username: 'string',
    email: 'string',
    first_name: 'string',
    last_name: 'string',
    access_token: 'string'
  },
};
class Music {}
Music.schema = {  
  name: 'Music',
  primaryKey: 'key',
  properties: {
    key: 'string',
    title: 'string',
    author: 'string',
    url: 'string',
    path: 'string',
    thumbnail: 'string',
    genre: 'string'
  },
};

const realm = new Realm({schema: [User, Music]});

export default realm
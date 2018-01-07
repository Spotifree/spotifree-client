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

const realm = new Realm({schema: [User]});

export default realm
const users = {
  valid : {
    name : 'standard_user' ,
    password: 'secret_sauce',
  },
  invalid : {
    name: 'some_user',
    password: 'some_password',
  }, 
  empty : {
    name: '',
    password: ''
  },
  blocked : {
    name: 'locked_out_user',
    password: 'secret_sauce'
  },
  problem : {
    name: 'problem_user',
    password: 'secret_sauce'
  }
}

module.exports = users;
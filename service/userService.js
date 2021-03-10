const Debug = require('debug')
const User = require('../store/user')
const debug = new Debug('jlc-prime-numbers:service-user*')

async function getUser(email) {
  const user = await User.findOne(email);
  return user;
}

module.exports = { getUser }

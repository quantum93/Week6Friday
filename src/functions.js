const getUser = (id) => {
  return {id, email: `user${id}@test.com`}; // <---- it is really good style to remember.
}

const sum = (a, b) => a + b
const mul = (a, b) => a * b
const sub = (a, b) => a - b
const div = (a, b) => a / b

module.exports = {getUser, sum, mul, sub, div}
// module.exports = getUser, sum, mul, sub, div <--- it works too!
// module.exports = getUser <--- it is for one function test!

const knex = require('../db/knex')

function getMessages() {
  return knex('message')
}

function postMessage() {
  return knex('message')
  .insert(newPost)
  returning('*')
}

function getUsers() {
  return knex('user')
}

function getUserByID(id) {
  return knex('user')
  .where('id', id)
}

function postSignUp() {
  return knex('user')
  .insert(newUser)
  
}


module.exports = {
  getUsers,
  getUserByID,
  getMessages,
  postMessage,
  postSignUp
}

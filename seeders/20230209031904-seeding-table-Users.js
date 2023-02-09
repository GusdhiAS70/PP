'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    let data = [{
      userName: 'Yupiter1',
      email: 'planet@email.com',
      password: 'Jupiter21',
      role: 'user'
    },
    {
      userName: 'Avansa2',
      email: 'mobil@email.com',
      password: 'Avanza12',
      role: 'user'
    },
    {
      userName: 'PKX3',
      email: 'motor@email.com',
      password: 'PCX13',
      role: 'user'
    }
  ]
  let mapping = data.map(el => {
      el.createdAt = el.updatedAt = new Date()   
      return el 
  })
  return queryInterface.bulkInsert('Users',mapping)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users',null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

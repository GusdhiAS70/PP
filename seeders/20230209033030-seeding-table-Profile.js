'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    let data = [{
      name:'Arman Maulana',
      gender: 'Male',
      UserId: 1
    },
    {
      name:'Tono Antonio',
      gender: 'Male',
      UserId: 2
    },
    {
      name:'Fatimah Ramadhani',
      gender: 'Female',
      UserId: 3
    }]
    let mapping = data.map(el => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    return queryInterface.bulkInsert('Profiles', mapping)
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
    return queryInterface.bulkDelete('Profiles', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

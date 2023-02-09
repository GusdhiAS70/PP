'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    let data = [{
      name: 'Matic'
    },
    {
      name: 'Manual'
    },
    {
      name: 'Hybrid'
    }]
    let mapping = data.map(el => {
      el.createdAt = el.updatedAt = new Date()
      return el
    })
    return queryInterface.bulkInsert('Categories', mapping)
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
    return queryInterface.bulkDelete('Categories', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

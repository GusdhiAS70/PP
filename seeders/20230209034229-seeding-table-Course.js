'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    let data = [{
      name: 'Joseph Anderson',
      experience: 20,
      achievement: 'Gold medal Dirt Racing GPX 2010',
      duration: 60,
      CategoryId: 3,
      UserId : 3
    },
    {
      name: 'Gandalf Putih',
      experience: 50,
      achievement: 'Siver medal Michelin Star GP 2015',
      duration: 90,
      CategoryId: 2,
      UserId : 2
    },
    {
      name: 'Bianca Simatupang',
      experience: 5,
      achievement: 'Gold medal Ojek Master Race 2018',
      duration: 120,
      CategoryId: 1,
      UserId : 1
    }
    
  ]

  let mapping = data.map(el => {
    el.createdAt = el.updatedAt = new Date()
    return el
  })

  return queryInterface.bulkInsert('Courses', mapping)


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
    return queryInterface.bulkDelete('Courses', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

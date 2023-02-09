'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    let data = [{
      name: 'Joseph Anderson',
      description: 'Guru asal amerika yang sudah menyetir selama 20 tahun,  peraih medali emas Dirt Racing GPX 2010 di Belanda',
      duration: 60,
      CategoryId: 3,
      UserId : 3
    },
    {
      name: 'Gandalf Putih',
      description: 'Guru asal eropa yang sudah menyetir selama 50,  peraih medali silver Michelin World Tour 2020 di Amerika',
      duration: 90,
      CategoryId: 2,
      UserId : 2
    },
    {
      name: 'Bianca Simatupang',
      description: 'Guru asli Indonesia yang sudah menyetir selama 5 tahun,  peraih medali emas Ojek Master Race 2015 di Indonesia',
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

'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(user)
      Course.belongsTo(category)
    }
  }
  Course.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    CategoryId: {type:DataTypes.INTEGER,
    references:{model :"Categories" , key:'Id'}},
    UserId: {type:DataTypes.INTEGER,
    references:{model :"Users" , key:'Id'}}
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
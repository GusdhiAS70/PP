'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.User)
      Course.belongsTo(models.Category)
    }
  }
  Course.init({
    name: DataTypes.STRING,
    experience: DataTypes.INTEGER,
    achievement: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
  });
  return Course;
};
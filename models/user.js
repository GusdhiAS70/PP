'use strict';
const {
  Model
} = require('sequelize');
const course = require('./course');
const profile = require('./profile');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(profile, {
        foreignKey: 'UserId'
      })
      User.hasMany(course, {
        foreignKey: 'UserId'
      })
    }
  }
  User.init({
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
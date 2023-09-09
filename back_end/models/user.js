"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Description }) {
      User.hasMany(Description, { as: "user", foreignKey: "user_id" });
    }
  }
  User.init(
    {
      userId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      passwordDigest: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      modelName: "User",
    }
  );
  return User;
};

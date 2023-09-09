"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Move extends Model {
    static associate({ Description }) {
      Move.hasMany(Description, { foreignKey: "move_id", as: "descriptions" });
    }
  }

  Move.init(
    {
      moveId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      position: DataTypes.STRING,
      submission: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      modelName: "Move",
    }
  );
  return Move;
};

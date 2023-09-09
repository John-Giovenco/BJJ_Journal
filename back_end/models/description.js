"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Description extends Model {
    static associate({ User, Move }) {
      Description.belongsTo(Move, { as: "move", foreignKey: "move_id" });
      Description.belongsTo(User, { as: "user", foreignKey: "user_id" });
    }
  }
  Description.init(
    {
      descriptionId: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        autoIncrement: true,
      },
      moveId: DataTypes.SMALLINT,
      content: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      modelName: "Description",
    }
  );
  return Description;
};

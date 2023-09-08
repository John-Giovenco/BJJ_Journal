"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Move }) {
      Description;
    }
  }
};

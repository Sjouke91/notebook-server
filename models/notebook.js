"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class notebook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  notebook.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      subjectId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "notebook",
    }
  );
  return notebook;
};

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
      notebook.belongsTo(models.user);
      notebook.belongsTo(models.subject);
      notebook.hasMany(models.note);
    }
  }
  notebook.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
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

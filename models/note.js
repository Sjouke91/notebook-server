"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  note.init(
    {
      notebookId: { type: DataTypes.INTEGER, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      imageUrl: DataTypes.STRING,
      type: {
        type: DataTypes.ENUM("textnote", "definition", "snippet", "stepbystep"),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "note",
    }
  );
  return note;
};

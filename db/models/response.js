'use strict';
module.exports = (sequelize, DataTypes) => {
  const Response = sequelize.define('Response', {
    body: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Response.associate = function(models) {
    Response.belongsTo(models.Story, {
      foreignKey: "storyId"
    });
    Response.belongsTo(models.User, { foreignKey: 'userId' });
    Response.hasMany(models.Clap, {
      foreignKey: "responseId",
      onDelete: "CASCADE",
      hooks: true,
    });
  };
  return Response;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clap = sequelize.define('Clap', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    responseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Clap.associate = function(models) {
    Clap.belongsTo(models.Story, { foreignKey: 'storyId' });
    Clap.belongsTo(models.Response, { foreignKey: 'responseId' });
  };
  return Clap;
};

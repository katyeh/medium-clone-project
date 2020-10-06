'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clap = sequelize.define('Clap', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    storyId: {
      type: DataTypes.INTEGER,
    },
    responseId: {
      type: DataTypes.INTEGER,
    }
  }, {});
  Clap.associate = function(models) {
    Clap.belongsTo(models.User, { foreignKey: 'userId' });
    Clap.belongsTo(models.Story, { foreignKey: 'storyId' });
    Clap.belongsTo(models.Response, { foreignKey: 'responseId' });
  };
  return Clap;
};

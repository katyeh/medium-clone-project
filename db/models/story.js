'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {});
  Story.associate = function(models) {
    // associations can be defined here
    Story.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId"
    })
  };
  return Story;
};

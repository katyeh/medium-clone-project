'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {});
  Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.User, {
      as: "users",
      foreignKey: "userId"
    })
    Bookmark.belongsTo(models.Story, {
      as: "stories",
      foreignKey: "storyId"
    })
  };
  return Bookmark;
};

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
    // associations can be defined here
    Bookmark.hasMany(models.User, {
      as: "users",
      foreignKey:"userId"
    })
    Bookmark.belongsTo(models.Story, {
      as: "stories",
      foreignKey: "storyId"
    })
  };
  return Bookmark;
};

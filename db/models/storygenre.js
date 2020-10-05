'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoryGenre = sequelize.define('StoryGenre', {
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    storyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  StoryGenre.associate = function(models) {
    StoryGenre.belongsTo(models.Genre, {
      foreignKey: 'genreId'
    });
    StoryGenre.belongsTo(models.Story, {
      foreignKey: 'storyId'
    });
  };
  return StoryGenre;
};
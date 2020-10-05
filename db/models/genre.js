'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {});
  Genre.associate = function(models) {
    Genre.hasMany(models.StoryGenre, {
      foreignKey: 'genreId'
    });
  };
  return Genre;
};
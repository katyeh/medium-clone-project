'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define(
    "Story",
    {
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING(140),
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING(500),
      }
    },
    {}
  );
  Story.associate = function(models) {
    Story.hasMany(models.Response, {
      foreignKey: "storyId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Story.hasMany(models.Clap, {
      foreignKey: "storyId",
      onDelete: "CASCADE",
      hooks: true,
    });
    Story.hasMany(models.StoryGenre, {
      foreignKey: 'storyId',
      onDelete: "CASCADE",
      hooks: true,
    })
    Story.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId"
    });
  };
  return Story;
};

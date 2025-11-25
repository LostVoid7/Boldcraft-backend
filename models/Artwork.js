import { DataTypes, Model } from '@sequelize/core';
import { sequelize } from './index.js';

export class Artwork extends Model {}

Artwork.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
  },
  category: {
    type: DataTypes.ENUM('drawing', 'graphic-design'),
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Artwork',
  tableName: 'artworks',
  underscored: true,
});

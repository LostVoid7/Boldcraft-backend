import { DataTypes, Model } from '@sequelize/core';
import { sequelize } from './index.js';

export class User extends Model {}

User.init({
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING,
  },
  password_hash: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
});

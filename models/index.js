import 'dotenv/config';
import { Sequelize, DataTypes, Model } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

export const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
});

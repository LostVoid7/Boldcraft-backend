import { sequelize } from './models/index.js';
import { User } from './models/User.js';
import { Artwork } from './models/Artwork.js';

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database!");

    await sequelize.sync({ alter: true });
    console.log("Models synced successfully!");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await sequelize.close();
  }
})();

const user = User.create({email:'myEmail', password_hash:'password'});



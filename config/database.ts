import { Sequelize } from 'sequelize';
import { Enchere, Session, User } from '../src/models/models';

const DB_NAME = 'backend';
const DB_USER = 'root';
const DB_PASSWORD = '';
const DB_HOST = '127.0.0.1'; 
const DB_PORT = 3306; 

const db = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: false
});


db.sync()
  .then(async () => {
    
    console.log('Connexion à la base de données réussie.');
    await Enchere.sync()
    await User.sync()
    await Session.sync()

  })
  .catch((error: any) => {
    console.error('Impossible de se connecter à la base de données:', error);
  });

export default db;

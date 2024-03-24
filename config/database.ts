import { Sequelize } from 'sequelize';

const DB_NAME = 'back';
const DB_USER = 'root';
const DB_PASSWORD = '';
const DB_HOST = 'localhost'; 
const DB_PORT = 3306; 

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: false, 
});


sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie.');
  })
  .catch((error: any) => {
    console.error('Impossible de se connecter à la base de données:', error);
  });

export default sequelize;

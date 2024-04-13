// import { Model, DataTypes } from 'sequelize';
// import db from '../../config/database';
// import Session from './Session';
// import Enchere from './Enchere';

// class User extends Model {
//   public id!: number;
//   public nom!: string;
//   public prenom!: string;
//   public adress!: string;
//   public contact!: string;

//   public email!: string;
//   public password!: string;

//   public readonly createdAt!: Date;

//   public readonly updatedAt!: Date;
// }

// User.init(
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },

    
//     nom: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: false,
//     },
//     prenom: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: false,
//     },
//     adress: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: false,
//     },
//     contact: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },

//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: db,
//     tableName: 'users', 
//   }
// );


// User.belongsToMany(Session, { through: Enchere, as: "sessions" });
// Session.belongsToMany(User, { through: Enchere, as: "users" });

// export default User;

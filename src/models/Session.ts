// import { Model, DataTypes } from 'sequelize';
// import db from '../../config/database';
// import User from './User';
// import Enchere from './Enchere';

// class Session extends Model {
//   public id!: number;
//   public date!: Date;
//   public duree!: number;
//   public productId!: number;

//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }

// Session.init(
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     duree: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       allowNull: false,
//       unique: false,
//     },
//     productId: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     active: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: db,
//     tableName: 'sessions',
//   } 
// );


// User.belongsToMany(Session, { through: Enchere, as: "sessions" });
// Session.belongsToMany(User, { through: Enchere, as: "users" });

// export default Session;

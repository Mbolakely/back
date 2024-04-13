// import { Model, DataTypes, } from 'sequelize';
// import db from '../../config/database';
// import Session from './Session';
// import User from './User';

// class Enchere extends Model {
//   public id!: number;
//   public userId!: number;
//   public sessionId!: number;

//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }

// Enchere.init(
//   {
//     id: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     userId: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       allowNull: false,
//     },
//     sessionId: {
//       type: DataTypes.INTEGER.UNSIGNED,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: db,
//     tableName: 'encheres',
//   }
// );


// // User.belongsToMany(Session, { through: Enchere });
// // Session.belongsToMany(User, { through: Enchere });

// // Enchere.belongsTo(User);
// // Enchere.belongsTo(Session);

// // User.hasMany(Enchere);
// // Session.hasMany(Enchere);

// // CoursDeChange.belongsTo(Devise, { foreignKey: 'deviseId'});
// // Devise.hasMany(CoursDeChange, { foreignKey: 'deviseId'});

// export default Enchere;

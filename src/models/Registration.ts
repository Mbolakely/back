import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

class Registration extends Model {
  public id!: number;
  public nom!: string;
  public prenom!: string;
  public adress!: string;
  public contact!: string;

  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

Registration.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },

    
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'registrations', 
  }
);

export default Registration;

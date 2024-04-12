import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import CoursDeChange from './CoursDeChange';

class Devise extends Model {
  public id!: number;
  public nom!: string;
  public code!: string;
  public taux!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Devise.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    taux: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'devises',
  } 
);

export default Devise;

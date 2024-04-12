import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
import Devise from './Devise';

class CoursDeChange extends Model {
  public id!: number;
  public deviseId!: number;
  public tauxChange!: number;
  public date!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CoursDeChange.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    deviseId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    tauxChange: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'cours_de_changes',
  }
);

CoursDeChange.belongsTo(Devise, { foreignKey: 'deviseId', as: 'devise' });

export default CoursDeChange;

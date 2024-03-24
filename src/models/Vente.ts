import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';

class Vente extends Model {
  public id!: number;
  public numProduit!: number;
  public design!: string;
  public prix!: number;
  public quantite!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Vente.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    numProduit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    design: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'ventes',
  }
);

export default Vente;

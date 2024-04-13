import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database';
class User extends Model {
  public id!: number;
  public nom!: string;
  public prenom!: string;
  public adress!: string;
  public contact!: string;

  public email!: string;
  public password!: string;
  public isAdmin!: boolean;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

User.init(
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
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users', 
  }
);


class Enchere extends Model {
  public id!: number;
  public userId!: number;
  public sessionId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Enchere.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    sessionId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'encheres',
  }
);


class Session extends Model {
  public id!: number;
  public date!: Date;
  public duree!: number;
  public productId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Session.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    duree: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      unique: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'sessions',
  } 
);

User.belongsToMany(Session, { through: Enchere, as: "sessions" });
Session.belongsToMany(User, { through: Enchere, as: "users" });

Enchere.belongsTo(User);
Enchere.belongsTo(Session);

User.hasMany(Enchere);
Session.hasMany(Enchere);

export { User, Enchere, Session };

import { Sequelize, Model, DataTypes } from "sequelize";

export const sequelize = new Sequelize("sqlite::memory:");

class Member extends Model {
  declare id: number;
  declare name: string;
  declare address: string;
  declare contact: string;
}
Member.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [5, 100],
      },
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        len: [20, 500],
      },
    },
    contact: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  { sequelize }
);

class Investment extends Model {}
Investment.init(
  {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
      defaultValue: "Not available",
      allowNull: true,
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
  },
  { sequelize }
);

Member.hasMany(Investment);
Investment.belongsTo(Member, {
  foreignKey: {
    name: "member_id",
    allowNull: false,
  },
});

//////////////////////////////Lenders/////////////////////////////

class Lender extends Model {
  declare id: number;
  declare name: string;
  declare address: string;
  declare contact: string;
}
Lender.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: [5, 100],
      },
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: false,
      validate: {
        len: [20, 500],
      },
    },
    contact: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  },
  { sequelize }
);

class Loan extends Model {}
Loan.init(
  {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(500),
      defaultValue: "Not available",
      allowNull: true,
    },
    amount: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    interestRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      // defaultValue: #TODO
    },
    interestPayMode: {
      type: DataTypes.ENUM("#TODO"),
      // defaultValue
    },
  },
  { sequelize }
);

Lender.hasMany(Loan);
Loan.belongsTo(Lender, {
  foreignKey: {
    name: "lender_id",
    allowNull: false,
  },
});

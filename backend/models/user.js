module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user',{
    name: {
      type: DataTypes.STRING(20),
      allowNULL: false,
      unique: false,
    },
    uid: {
      type: DataTypes.STRING(20),
      allowNULL: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(20),
      allowNULL: false,
      unique: false,
    },
    phone: {
      type: DataTypes.STRING(20),
      allowNULL: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING(20),
      allowNULL: false,
      unique: true,
    }
  });
};

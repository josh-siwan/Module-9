const { DataTypes, Model } = require("sequelize");

let dbConnect = require("../dbConnect");
const User = require("./users");


const sequelizeInstance = dbConnect.Sequelize;

class Posts extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Posts.init(
  {
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    PostID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "posts", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Posts;

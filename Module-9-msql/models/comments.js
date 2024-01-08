const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const Post = require("./posts");
const User = require("./users");
const sequelizeInstance = dbConnect.Sequelize;

class Comments extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Comments.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CommentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "comments", //use lowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);
module.exports = Comments;

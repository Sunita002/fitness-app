const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Fooditems extends Model {}

Fooditems.init(
    {
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,

    }
)
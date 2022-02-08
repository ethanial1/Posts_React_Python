const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descrip: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
}
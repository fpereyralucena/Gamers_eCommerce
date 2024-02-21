
module.exports = (sequelize, DataTypes) => {

    const name = "users";
    const constructor = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstName: {
            type: DataTypes.VARCHAR(255),
            allowNull: false
        },
        lastName: {
            type: DataTypes.VARCHAR(255),
            allowNull: false
        },
        email: {
            type: DataTypes.VARCHAR(55),
            allowNull: false
        },
        password: {
            type: DataTypes.VARCHAR(255),
            allowNull: false
        },
        userEspecify_id: {
            foreignKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tablename: "users"
    };
    const users = sequelize.define(name, constructor, config);

    return users;

};
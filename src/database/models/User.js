
module.exports = (sequelize, DataTypes) => {

    const name = "Users";
    const constructor = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(55),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        /* image: {
            type: DataTypes.STRING(50),
            allowNull: true,
        }, */
        userEspecify_id: {
            foreignKey: true,
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    const config = {
        tablename: "users",
        timestamps: false,
    };
    const users = sequelize.define(name, constructor, config);

    return users;

};
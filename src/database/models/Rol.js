
module.exports = (sequelize, DataTypes) => {

    const name = "roles";
    const constructor = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userRol: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    };

    const config = {
        tablename: "roles"
    };
    const roles = sequelize.define(name, constructor, config);

    return roles;

};
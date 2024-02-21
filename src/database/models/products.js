module.exports = (sequelize, DataTypes) => {
   
    const name = "products";
    const constructor = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.VARCHAR(55),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.VARCHAR(50),
            allowNull: true,
        }

    };
    const config = {
        tablename: "products"
    }
    const products = sequelize.define(name, constructor, config);
    return products
}



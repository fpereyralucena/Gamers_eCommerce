module.exports = (sequelize, DataTypes) => {
   
    const name = "Product";
    const constructor = {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(55),
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 0),
            allowNull: false,
        },
         discount: {
             type: DataTypes.DECIMAL,
             allowNull: true,
        },
        image: {
            type: DataTypes.STRING(50),
            allowNull: true,
        }

    };
    const config = {
        tableName: "products",
        timestamps: false,
    }
    const Product = sequelize.define(name, constructor, config);
    return Product
}



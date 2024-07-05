export const Books = (sequelize: any, DataTypes: any) => {
  const Books = sequelize.define(
    "Books",
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        // defaultValue: "",
        type: DataTypes.STRING,
      },
      price: {
        // defaultValue: "",
        type: DataTypes.INTEGER,
      },
    },
  
  );

  return Books;
};
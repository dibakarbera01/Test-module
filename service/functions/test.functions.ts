import { databaseActions } from "@wrappid/service-core";

/**
 * @returns
 */
const readBookDataAll = async () => {
  try {
    const result = await databaseActions.findAll("application", "Books");
    return result;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

const createBookDataAll = async (req:any) => {
  
  try {
    const result = await databaseActions.create("application", "Books",{
      name:req.body["name"],
      price:req.body["price"],
      createdAt:Date.now(),
      updatedAt:Date.now(),
      
    });
   
    return result;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
const getSingleBook = async (req:any) => {
  
  try {
    const result = await databaseActions.findByPk("application", "Books",req.params["id"]);
   
    return result;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

const deleteBook = async (req:any) => {
  
  try {
    const result = await databaseActions.delete("application", "Books",{
      where:{id:req.params["id"]}
    });
   
    return result;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};
const updateBook = async (req: any) => {
  try {
    const result = await databaseActions.update(
      "application", 
      "Books",
      {
        name: req.body["name"],
        price: req.body["price"],
        updatedAt: Date.now(),
        createdAt:Date.now(),
      },
      {
        where: { id: req.params["id"] }
      }
    );
    return result;
  } catch (error: any) {
    console.log(error);
    throw error;
  }
};

export {
  readBookDataAll,
  createBookDataAll,
  getSingleBook,
  deleteBook,
  updateBook
};
import * as testFunctions from "../functions/test.functions";

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getAllBooks = async (req: any, res: any) => {
  try {
  
    
    const data: any = await testFunctions.readBookDataAll();
    return res.status(200).json({
      message: "Response Data(•_•) :",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
  }
};
const createAllBooks = async (req: any, res: any) => {
  try {
  
    const reqData=req.body;
    console.log(reqData);
    
    const data: any = await testFunctions.createBookDataAll(req);

    return res.status(200).json({
      message: "product added successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
  }
};
const getSingleBooks = async (req: any, res: any) => {
  try {
  
    const id=req.params["id"];
    console.log(id);
    
    
    const data: any = await testFunctions.getSingleBook(req);

    return res.status(200).json({
      message: "Single Product fetch  Successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
  }
};

const deleteBooks = async (req: any, res: any) => {
  try {
  
    const id=req.params["id"];
    console.log(id);
    
    
    const data: any = await testFunctions.deleteBook(req);

    return res.status(200).json({
      message: "Product Deleted Successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
  }
};
const updateBooks = async (req: any, res: any) => {
  try {
  
    const id=req.params["id"];
    console.log(id);
    
    
    const data: any = await testFunctions.updateBook(req);

    return res.status(200).json({
      message: "Product Update Successfully",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong.", error });
  }
};

export {
  getAllBooks,
  createAllBooks,
  getSingleBooks,
  deleteBooks,
  updateBooks
};
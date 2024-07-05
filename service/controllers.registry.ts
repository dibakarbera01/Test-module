import * as testController from "./controllers/test.controller";

const ControllersRegistry = {
  getAllBooks:[testController.getAllBooks],
  createAllBooks:[testController.createAllBooks],
  getSingleBooks:[testController.getSingleBooks],
  deleteBooks:[testController.deleteBooks],
  updateBooks:[testController.updateBooks]
};

export default ControllersRegistry;
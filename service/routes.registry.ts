const RoutesRegistry = {
  getAllBooks: {
    name: "Test Get All API",
    url: "getAllBooks",
    authRequired: false,
    entityRef: "getAllBooks",
    reqMethod: "get",
    controllerRef: "getAllBooks",
  },
  createAllBooks: {
    name: "Test Get All API",
    url: "createAllBooks",
    authRequired: false,
    entityRef: "createAllBooks",
    reqMethod: "post",
    controllerRef: "createAllBooks",
  }
  ,
  getSingleBooks: {
    name: "Test Get All API",
    url: "getSingleBooks/:id",
    authRequired: false,
    entityRef: "getSingleBooks",
    reqMethod: "get",
    controllerRef: "getSingleBooks",
  },
  deleteBooks: {
    name: "Test Get All API",
    url: "deleteBooks/:id",
    authRequired: false,
    entityRef: "deleteBooks",
    reqMethod: "post",
    controllerRef: "deleteBooks",
  }
  ,
  updateBooks: {
    name: "Test Get All API",
    url: "updateBooks/:id",
    authRequired: false,
    entityRef: "updateBooks",
    reqMethod: "post",
    controllerRef: "updateBooks",
  }
 
};

export default RoutesRegistry;

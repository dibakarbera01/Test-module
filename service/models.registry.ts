import { Books } from "./models/Books.model";



const ModelsRegistry = {
  Books: {
    database: "application",
    model: Books,
  },
};

export default ModelsRegistry;
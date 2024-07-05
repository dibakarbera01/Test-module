import Calulator from "./components/Calculator";
import Form from "./components/Form";
import Resume from "./components/Resume";
export const RoutesRegistry = {
  Calulator: {
    Page        : { appComponent: Calulator.name },
    authRequired: false,
    entityRef   : "calculator",
    url         : "calculator"
  },
  Form: {
    Page        : { appComponent: Form.name },
    authRequired: false,
    entityRef   : "form",
    url         : "form"
  },
  Resume: {
    Page        : { appComponent: Resume.name },
    authRequired: false,
    entityRef   : "resume",
    url         : "resume"
  },
  defaultModuleRoute: {
    Page        : { appComponent: "ModuleComponent" },
    authRequired: false,
    entityRef   : "testmodule",
    url         : "testmodule"
  },
};
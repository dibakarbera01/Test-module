import Calculator from "./components/Calculator";
import ModuleComponent from "./components/ModuleComponent";
import Resume from "./components/Resume";
import TestComponent from "./components/TestComponent";
import TestComponentMobile from "./components/TestComponentMobile";
import TestComponentWeb from "./components/TestComponentWeb";

export const ComponentsRegistry = {

  Calculator          : { comp: Calculator },
  ModuleComponent     : { comp: ModuleComponent },
  Resume              : { comp: Resume },
  TestComponents      : { comp: TestComponent },
  TestComponentsMobile: {
    comp: TestComponentMobile,
    web : false
  },
  TestComponentsWeb: {
    comp  : TestComponentWeb,
    mobile: false
  }
};
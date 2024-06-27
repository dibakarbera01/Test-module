import {
  CoreBox, CoreClasses, CoreTypographyBody1, CoreLayoutItem, BlankLayout, CoreH1 
} from "@wrappid/core";

import ModuleClasses from "../styles/ModuleClasses";

export default function ModuleComponent() {
  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>

        <CoreBox styleClasses={[CoreClasses.PADDING.P5, ModuleClasses.TEST_WRAPPID_STYLE_CLASS]}>
          
          <CoreTypographyBody1>
            <CoreH1>Hello</CoreH1>
          </CoreTypographyBody1>
          
        </CoreBox>
      </CoreLayoutItem>
    </>
   
  );
}

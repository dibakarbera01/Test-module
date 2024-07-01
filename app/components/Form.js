import {
  BlankLayout,
  CoreLayoutItem,
  CoreBox,
  
  CoreClasses,
  CoreForm,
  FORM_EDIT_MODE,
  CoreH4,
  CoreAvatar,
  CoreCard
 
} from "@wrappid/core";

const Form = () => {
  const CoreFormSampleSchema = {
    actionContainerStyle: "alignRight",
    actions             : [],
    allowCancel         : true,
    cardElevation       : false,
    fields              : [
      {
        gridSize: 12,
        id      : "f_name",
        label   : "Enter your First Name",
        name    : "f_name",
        required: true,
        type    : "text",
      },
      {
        gridSize: 12,
        id      : "l_name",
        label   : "Enter your Last Name",
        name    : "l_name",
        required: true,
        type    : "text",
      },
      {
        gridSize: 12,
        id      : "email",
        label   : "Enter your Email",
        name    : "email",
        required: true,
        type    : "text",
      },
      {
        gridSize: 12,
        id      : "password",
        label   : "Enter your Password",
        name    : "password",
        required: true,
        type    : "password",
      },
    ],
    submitButtonLabel: "Submit",
  };

  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P3]}>
          <CoreCard styleClasses={[CoreClasses.WIDTH.MAX_W_50, CoreClasses.DEV_BORDER, CoreClasses.BORDER.BORDER_ROUNDED_5, CoreClasses.SHADOW.LARGE]}>
            <CoreBox styleClasses={[CoreClasses.MARGIN.M5]}>
              <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                <CoreAvatar></CoreAvatar>
              </CoreBox>

              <CoreBox styleClasses={[CoreClasses.PADDING.P3]}>
                <CoreH4 styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.BG.BG_WARNING_LIGHT, CoreClasses.BORDER.BORDER_ROUNDED_5]}>
            Signup
                </CoreH4>

              </CoreBox>

              <CoreBox
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.WIDTH.MIN_W_50]}
              >
           
                <CoreForm
                  formId="coreFormSampleSchema"
                  formJson={{ coreFormSampleSchema: CoreFormSampleSchema }}
                  authenticated={false}
                  addForm={true}
                  initData={{ data: "Hello" }}
                  mode={FORM_EDIT_MODE}
                  styleClasses={[CoreClasses.WIDTH.MIN_W_50]}
        
                />
            
              </CoreBox>
            </CoreBox>
          </CoreCard>
        </CoreBox>
        
      </CoreLayoutItem>
    </>
  );
};

export default Form;
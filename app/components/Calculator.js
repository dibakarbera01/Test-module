import { useState } from "react";

import {
  CoreLayoutItem,
  BlankLayout,
  CoreCardActions,
  CoreTypographyBody1,
  CoreCard,
  CoreCardContent,
  CoreButton,
  CoreClasses,
  CoreBox,
  CoreTextField,
  CoreH4
} from "@wrappid/core";

import ModuleClasses from "../styles/ModuleClasses";
  
const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState(null);
  
  const handleCalculation = (operation) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let res;

    switch (operation) {
      case "add":
        res = num1 + num2;
        setFirstNumber("");
        setSecondNumber("");
        break;

      case "subtract":
        res = num1 - num2;
        setFirstNumber("");
        setSecondNumber("");
        break;

      case "multiply":
        res = num1 * num2;
        setFirstNumber("");
        setSecondNumber("");
        break;

      case "divide":
        res = num1 / num2;
        setFirstNumber("");
        setSecondNumber("");
        break;

      default:
        res = null;
    }
    setResult(res);
  };
  
  return (
    <>
      <CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
        <CoreBox styleClasses={[CoreClasses.PADDING.P1, ModuleClasses.TEST_WRAPPID_STYLE_CLASS]}>
          
          <CoreH4 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_INFO_DARK]}> Calculator App  </CoreH4>
  
        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.SHADOW.LARGE, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.MARGIN.M2]}>
          <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>

            <CoreCard >
              <CoreCardContent>

                <CoreTypographyBody1 variant="h5" component="div">
        
                </CoreTypographyBody1>

                <CoreTextField
                  id="outlined-basic"
                  label="First Number"
                  variant="outlined"
                  value={firstNumber}
                  onChange={(exe) => setFirstNumber(exe.target.value)}
                  styleClasses={[CoreClasses.MARGIN.M2]}
                />

                <CoreTextField
                  id="outlined-basic"
                  label="Second Number"
                  variant="outlined"
                  value={secondNumber}
                  onChange={(exe) => setSecondNumber(exe.target.value)}
                  styleClasses={[CoreClasses.MARGIN.M2]}
                />
              </CoreCardContent>

              <CoreCardActions>
                <CoreButton size="small" onClick={() => handleCalculation("add")}>Add</CoreButton>

                <CoreButton size="small" onClick={() => handleCalculation("subtract")}>Subtract</CoreButton>

                <CoreButton size="small" onClick={() => handleCalculation("multiply")}>Multiply</CoreButton>

                <CoreButton size="small" onClick={() => handleCalculation("divide")}>Divide</CoreButton>
              </CoreCardActions>
            </CoreCard>
          </CoreBox>

          <CoreBox >
            <CoreH4 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_INFO_DARK, CoreClasses.PADDING.P1, CoreClasses.MARGIN.M5]}> 
         
              Result: {result}
     
            </CoreH4>

          </CoreBox>

        </CoreBox>
        
      </CoreLayoutItem>
        
    </>
  );
};
  
export default Calculator;
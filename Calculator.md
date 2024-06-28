


# Calculator Component

## Overview
The `Calculator` component is a simple React functional component designed to perform basic arithmetic operations: addition, subtraction, multiplication, and division. It uses several UI components from the `@wrappid/core` library to provide a user-friendly interface. The user can input two numbers and select an operation to see the result.

## Import Statements
```javascript
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
```
- `useState` is a React hook for managing state within the component.
- Various components and utilities are imported from `@wrappid/core` for building the UI.
- `ModuleClasses` imports custom styles for the component.

## State Variables
```javascript
const [firstNumber, setFirstNumber] = useState("");
const [secondNumber, setSecondNumber] = useState("");
const [result, setResult] = useState(null);
```
- `firstNumber` and `secondNumber` store the user inputs for the numbers to be calculated.
- `result` stores the outcome of the arithmetic operation.

## handleCalculation Function
```javascript
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
```
- This function takes an `operation` string as a parameter and performs the corresponding arithmetic operation.
- It parses the input numbers, performs the calculation, clears the inputs, and sets the result.

## JSX Structure
The component returns a JSX structure that builds the calculator interface.

### Layout and Styling
```javascript
<CoreLayoutItem id={BlankLayout.PLACEHOLDER.CONTENT}>
  <CoreBox styleClasses={[CoreClasses.PADDING.P1, ModuleClasses.TEST_WRAPPID_STYLE_CLASS]}>
    <CoreH4 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_INFO_DARK]}> 
      Calculator App  
    </CoreH4>
  </CoreBox>
```
- `CoreLayoutItem` and `CoreBox` are used to structure the layout with padding and custom styles.
- `CoreH4` displays the title "Calculator App".

### Calculator UI
```javascript
<CoreBox styleClasses={[CoreClasses.SHADOW.LARGE, CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_AROUND, CoreClasses.MARGIN.M2]}>
  <CoreBox styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
    <CoreCard>
      <CoreCardContent>
        <CoreTypographyBody1 variant="h5" component="div"></CoreTypographyBody1>
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
  <CoreBox>
    <CoreH4 styleClasses={[CoreClasses.TEXT.TEXT_CENTER, CoreClasses.COLOR.TEXT_INFO_DARK, CoreClasses.PADDING.P1, CoreClasses.MARGIN.M5]}> 
      Result: {result}
    </CoreH4>
  </CoreBox>
</CoreBox>
```
- The calculator UI includes a card (`CoreCard`) with input fields (`CoreTextField`) for the numbers and buttons (`CoreButton`) for the operations.
- The `CoreCardActions` section contains buttons that trigger the `handleCalculation` function with the respective operation.
- The result is displayed in another `CoreBox` using a `CoreH4` element.

## Component Export
```javascript
export default Calculator;
```
- The component is exported for use in other parts of the application.

## Summary
The `Calculator` component is a straightforward arithmetic calculator built using React and the `@wrappid/core` library. It allows users to input two numbers and select an operation to see the result, with the UI being styled using the `@wrappid/core` components and custom styles.
```


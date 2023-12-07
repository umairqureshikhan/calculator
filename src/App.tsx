import { useState } from "react";
import "./App.css";
import ButtonContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const buttonText = (buttonText: any) => {
    if (buttonText === "c"){
      setCalVal("")

    }
    else if (buttonText === "="){
      const result = eval(calVal)
      setCalVal(result);

    }
    else{
      const newDIsplayValue = calVal + buttonText
      setCalVal(newDIsplayValue)
    }
  };

  return (
    <div className="calculator">
      <Display displayvalue={calVal} />
      <ButtonContainer onButtonClicked={buttonText} />
    </div>
  );
}

export default App;

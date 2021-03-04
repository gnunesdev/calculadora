import React, { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";

import { Button } from "./styles";

interface Props {
  children: string;
}

const ButtonValue: React.FC = ({ children }) => {
  const { setCurrentVisor } = useContext(CalculatorContext);

  return (
    <Button onClick={() => setCurrentVisor(String(children))}>
      {children}
    </Button>
  );
};

export default ButtonValue;

import React, { useContext, useState } from "react";
import { CalculatorContext } from "./../../context/CalculatorContext";

import { Container } from "./styles";

import ButtonValue from "./../ButtonValue";

const Calculator: React.FC = () => {
  const { visor } = useContext(CalculatorContext);

  return (
    <Container>
      <div className="calculator__visor">{visor}</div>
      <div className="calculator__keyboard">
        <div className="calculator__values">
          <ButtonValue>9</ButtonValue>
          <ButtonValue>8</ButtonValue>
          <ButtonValue>7</ButtonValue>
          <ButtonValue>6</ButtonValue>
          <ButtonValue>5</ButtonValue>
          <ButtonValue>4</ButtonValue>
          <ButtonValue>3</ButtonValue>
          <ButtonValue>2</ButtonValue>
          <ButtonValue>1</ButtonValue>
          <ButtonValue>0</ButtonValue>
          <ButtonValue>,</ButtonValue>
          <ButtonValue>.</ButtonValue>
        </div>
      </div>
    </Container>
  );
};

export default Calculator;

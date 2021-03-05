import React, { useContext, useState } from "react";

import { Container } from "./styles";

import Visor from "./../Visor";
import ButtonValue from "./../ButtonValue";
import ThemeSwitcher from "../ThemeSwitcher";

interface Props {
  toggleTheme: () => void;
}

const Calculator: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <ThemeSwitcher toggleTheme={toggleTheme} className="calculator__theme" />
      <Visor />
      <div className="calculator__keyboard">
        {/* left side */}
        <div className="calculator__left">
          <div className="calculator__operators-alt"></div>
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

        {/* right side */}
        <div className="calculator__right">
          <div className="calculator__operator-basic"></div>
          <div className="calculator__operator-equal"></div>
        </div>
      </div>
    </Container>
  );
};

export default Calculator;

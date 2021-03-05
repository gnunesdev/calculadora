import React, { useContext } from "react";

import { Container } from "./styles";

interface Props {
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {

  return (
    <Container>
      Calculadora do Guizão
    </Container>
  );
};

export default Header;

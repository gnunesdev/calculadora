import React, { useContext } from 'react';
import { CalculatorContext } from '../../context/CalculatorContext';

import { Container } from './styles';

const Visor: React.FC = () => {
  const { visor } = useContext(CalculatorContext);

  return (
    <Container>
      <div className="visor__bottom">
        <span>{visor}</span>
      </div>
    </Container>
  )
} 

export default Visor;
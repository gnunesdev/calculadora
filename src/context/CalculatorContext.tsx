import React, { createContext, ReactNode, useState } from "react";

interface CalculatorContextData {
  visor: string;
  setCurrentVisor: (value: string) => void;
}

interface CalculatorProviderProps {
  children: ReactNode;
}

export const CalculatorContext = createContext({} as CalculatorContextData);

export function CalculatorProvider({ children }: CalculatorProviderProps) {
  const [visor, setVisor] = useState("");

  function setCurrentVisor(value: String) {
    setVisor(visor + value);
  }

  return (
    <CalculatorContext.Provider value={{ visor, setCurrentVisor }}>
      {children}
    </CalculatorContext.Provider>
  );
}

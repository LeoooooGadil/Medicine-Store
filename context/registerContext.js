import React, { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export const useRegister = () => useContext(RegisterContext);

export const RegisterProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <RegisterContext.Provider
      value={{
        currentStep,
        nextStep,
        prevStep,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

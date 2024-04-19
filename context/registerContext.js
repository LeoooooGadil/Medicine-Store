import React, { createContext, useContext, useState } from "react";

const RegisterContext = createContext();

export const useRegister = () => useContext(RegisterContext);

export const RegisterProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [error, setError] = useState("");

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSeniorCitizen, setIsSeniorCitizen] = useState(false);

  const nextStep = () => {
    setError(FieldValidation());
    if (FieldValidation() !== "") return;

    setCurrentStep((prevStep) => prevStep + 1);
    setError("");
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const FieldValidation = () => {
    switch (currentStep) {
      case 0:
        if (fullName === "") return "Full Name is required";
        if(fullName.length < 3) return "Full Name must be at least 3 characters long";
        return "";
      case 1:
        if (username === "") return "Username is required";
        if(username.length < 3) return "Username must be at least 3 characters long";
        if(username.includes(" ")) return "Username should not include spaces";
        return "";
      case 2:
        if (password === "") return "Password is required";
        if(password.length < 6) return "Password must be at least 6 characters long";
        if(password !== confirmPassword) return "Passwords do not match";
        return "";
      default:
        return "";
    }
  };

  return (
    <RegisterContext.Provider
      value={{
        currentStep,
        fullName,
        username,
        password,
        confirmPassword,
        error,
        isSeniorCitizen,
        nextStep,
        prevStep,
        setFullName,
        setUsername,
        setPassword,
        setConfirmPassword,
        setIsSeniorCitizen,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";
import { useNavigation, StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthentication } from "../hooks/useAuthentication";

const RegisterContext = createContext();

export const useRegister = () => useContext(RegisterContext);

export const RegisterProvider = ({ children }) => {
  const { register, checkUsername } = useAuthentication();

  const navigation = useNavigation();

  const [currentStep, setCurrentStep] = useState(0);

  const [error, setError] = useState("");

  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSeniorCitizen, setIsSeniorCitizen] = useState(false);
  const [SeniorCitizenProofUri, setSeniorCitizenProofUri] = useState("");

  const nextStep = () => {
    setError(FieldValidation());
    if (FieldValidation() !== "") return;

    if (currentStep === 3) CreateAccount();
    if (currentStep === 4) {
      navigation.dispatch(StackActions.replace("Root"));
      setCurrentStep(0);
    }

    setCurrentStep((prevStep) => prevStep + 1);
    setError("");
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const CreateAccount = async () => {
    setIsCreatingAccount(true);
    try {
      const newAccount = {
        username,
        password,
        data: {
          fullName,
          isSeniorCitizen,
          SeniorCitizenProofUri,
        },
      };
      await register.mutateAsync(newAccount);
    } catch (error) {
      console.error("Error creating account: ", error);
    } finally {
      setFullName("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setIsSeniorCitizen(false);
      setSeniorCitizenProofUri("");
      setTimeout(() => {
        setIsCreatingAccount(false);
      }, 3000);
    }
  };

  const FieldValidation = () => {
    switch (currentStep) {
      case 0:
        if (fullName === "") return "Full Name is required";
        if (fullName.length < 3)
          return "Full Name must be at least 3 characters long";
        return "";
      case 1:
        if (username === "") return "Username is required";
        if (username.length < 3)
          return "Username must be at least 3 characters long";
        if (username.includes(" ")) return "Username should not include spaces";
        if (checkUsername(username))
          return "Username is already taken, please choose another";
        return "";
      case 2:
        if (password === "") return "Password is required";
        if (password.length < 6)
          return "Password must be at least 6 characters long";
        if (password !== confirmPassword) return "Passwords do not match";
        return "";
      case 3:
        if (isSeniorCitizen && SeniorCitizenProofUri === null)
          return "Senior Citizen Proof is required";
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
        SeniorCitizenProofUri,
        isCreatingAccount,
        nextStep,
        prevStep,
        setCurrentStep,
        setFullName,
        setUsername,
        setPassword,
        setConfirmPassword,
        setIsSeniorCitizen,
        setSeniorCitizenProofUri,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

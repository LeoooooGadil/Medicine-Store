import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { QueryClientProvider, useMutation } from "react-query";
import { useNavigation, StackActions } from "@react-navigation/native";
import { useInAppNotification } from "../components/InAppNotification";

export const AuthContext = createContext();

export const useAuthentication = () => {
  return useContext(AuthContext);
};

// the authentication is just a simple email and password and can create a new account
export const AuthProvider = ({ children }) => {
  const { showNotification } = useInAppNotification();
  const [userDatabase, setUserDatabase] = useState([]); //[email: {username, password, otherData}]
  const [currentUser, setCurrentUser] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    SecureStore.getItemAsync("userDatabase").then((data) => {
      if (data) {
        setUserDatabase(JSON.parse(data));
      }
    });
    SecureStore.getItemAsync("user").then((data) => {
      if (data) {
        setCurrentUser(JSON.parse(data));
        navigation.dispatch(StackActions.replace("Root"));
      } else {
        navigation.dispatch(StackActions.replace("Auth"));
      }
    });
  }, []);

  const register = useMutation(
    async (data) => {
      const newUser = {
        data: data.data,
        username: data.username,
        password: data.password,
        isSeniorCitizen: data.isSeniorCitizen,
        SeniorCitizenProofUri: data.SeniorCitizenProofUri,
      };

      setUserDatabase([...userDatabase, newUser]);
      SecureStore.setItemAsync(
        "userDatabase",
        JSON.stringify([...userDatabase, newUser])
      );
      return newUser;
    },
    {
      onSuccess: (data) => {
        setCurrentUser(data);
        SecureStore.setItemAsync("user", JSON.stringify(data));
      },
    }
  );

  const checkUsername = (username) => {
    return userDatabase.find((user) => user.username === username);
  };

  const login = useMutation(async (data) => {
    const user = userDatabase.find((user) => user.username === data.username);
    if (!user) {
      return showNotification("Invalid username or password", "error", 5000, 0);
    }
    if (user.password !== data.password) {
      return showNotification("Invalid password or username", "error", 5000, 0);
    }

    setCurrentUser(user);
    SecureStore.setItemAsync("user", JSON.stringify(user));
    // remove previous stack and navigate to the root
    navigation.dispatch(StackActions.replace("Root"));
  });

  const logout = () => {
    SecureStore.deleteItemAsync("user");
    setCurrentUser(null);
    navigation.dispatch(StackActions.replace("Auth"));
  };

  const clearDatabase = () => {
    SecureStore.deleteItemAsync("userDatabase");
    setUserDatabase([]);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
        checkUsername,
        clearDatabase,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

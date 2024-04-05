import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { QueryClientProvider, useMutation } from "react-query";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export const useAuthentication = () => {
  return useContext(AuthContext);
};

// the authentication is just a simple email and password and can create a new account
export const AuthProvider = ({ children }) => {
  const [userDatabase, setUserDatabase] = useState([]); //[email: {email, password, otherData}]
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
	  }
	});
  }, []);

  const register = useMutation(
    async (data) => {
      const newUser = {
        email: data.email,
        password: data.password,
        ...data.otherData,
      };
      setUserDatabase([...userDatabase, newUser]);
	  SecureStore.setItemAsync("userDatabase", JSON.stringify([...userDatabase, newUser]));
      return newUser;
    },
    {
      onSuccess: (data) => {
        setCurrentUser(data);
        SecureStore.setItemAsync("user", JSON.stringify(data));
        navigation.navigate("Home");
      },
    }
  );

  const login = useMutation(async (data) => {
    const user = userDatabase.find((user) => user.email === data.email);
    if (!user) {
      throw new Error("User not found");
    }
    if (user.password !== data.password) {
      throw new Error("Invalid password");
    }
    return user;
  });

  const logout = () => {
    SecureStore.deleteItemAsync("user");
    setCurrentUser(null);
    navigation.navigate("Login");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


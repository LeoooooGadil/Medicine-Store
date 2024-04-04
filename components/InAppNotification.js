import { createContext, useContext, useState } from "react";
import tw from "twrnc";
import { View, Text, TouchableOpacity } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

const InAppNotificationContext = createContext();

export const useInAppNotification = () => useContext(InAppNotificationContext);

export const InAppNotificationProvider = ({ children }) => {
  // a component to show a notification for a short period of time
  // the notification will be shown on top of the screen
  // the notification will be hidden after a short period of time
  // 3 seconds by default
  // add animation to show and hide the notification
  // delay the showing of the notification

  const [notification, setNotification] = useState(null);

  const showNotification = (
    message,
    type = "info",
    duration = 3000,
    delay = 500
  ) => {
    // show the notification after a delay
    // hide the notification after a duration
    // the notification will be shown on top of the screen
    setTimeout(() => {
      setNotification({ message, type });

      setTimeout(() => {
        setNotification(null);
      }, duration);
    }, delay);
  };

  return (
    <InAppNotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <SafeAreaView style={tw`absolute top-0 left-0 right-0 p-4`}>
          <View
            style={tw`bg-white p-4 rounded-xl shadow-md flex-row justify-between items-center`}
          >
            <Text>{notification.message}</Text>
            <TouchableOpacity onPress={() => setNotification(null)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      )}
    </InAppNotificationContext.Provider>
  );
};

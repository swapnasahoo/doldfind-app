import { Ionicons } from "@expo/vector-icons";
import { Tabs, router } from "expo-router";
import { useEffect } from "react";

const TabsLayout = () => {
  const isLoggedIn = false; // Replace with actual authentication logic

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/(auth)/SignupScreen");
    }
  }, [isLoggedIn]);

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="SearchScreen"
        options={{
          title: "Search",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "search-sharp" : "search-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="RoamScreen"
        options={{
          title: "Roam",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "compass-sharp" : "compass-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="FriendsScreen"
        options={{
          title: "Friends",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "people-sharp" : "people-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="SavedScreen"
        options={{
          title: "Saved",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "bookmark-sharp" : "bookmark-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

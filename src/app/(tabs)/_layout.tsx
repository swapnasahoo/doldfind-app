import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="SearchScreen" options={{ title: "Search" }} />
      <Tabs.Screen name="RoamScreen" options={{ title: "Roam" }} />
      <Tabs.Screen name="FriendsScreen" options={{ title: "Friends" }} />
      <Tabs.Screen name="SavedScreen" options={{ title: "Saved" }} />
    </Tabs>
  );
};

export default TabsLayout;

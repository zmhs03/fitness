//../(tabs)/_layout.jsx
import { StatusBar } from "expo-status-bar"; // Provides the ability to control the appearance of the status bar
import { Redirect, Tabs } from "expo-router"; // Redirect is used for conditional navigation, Tabs handles tab navigation
import { Image, Text, View } from "react-native"; // Core components for rendering UI elements like images, text, and layout

import { icons } from "../../constants"; // Importing icon paths from a constants file
import { Loader } from "../../components"; // Loader component for displaying loading state
// import { useGlobalContext } from "../../context/GlobalProvider"; // Global context to access app-wide state (commented out for now)

const TabIcon = ({ icon, color, name, focused }) => {
  // This component renders the icon and label for each tab
  return (
    <View className="flex items-center justify-center gap-2">
      {/* Layout for aligning icon and text vertically */}
      <Image
        source={icon} // Dynamic icon passed via props
        resizeMode="contain" // Ensures the image fits within the container without distortion
        tintColor={color} // Color of the icon changes based on active/inactive state
        className="w-6 h-6" // Setting fixed width and height for the icon
      />
      <Text
        className={`${focused ? "font-rblack" : "font-rregular"} text-xs`}
        // Dynamic font style: uses "font-rmedium" for active and "font-rregular" for inactive
        style={{ color: color }} // Text color also changes based on active/inactive state
      >
        {name} {/* Displays the name of the tab */}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  // Layout for handling the tab navigation structure

  // const { loading, isLogged } = useGlobalContext(); // Uncomment to use global context for loading and login state

  // if (!loading && !isLogged) return <Redirect href="/sign-in" />;
  // If the user is not logged in and not loading, redirect to sign-in page

  return (
    <>
      {/* Tabs component defining different screens */}
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#34A853",
          tabBarInactiveTintColor: "#636363",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#FFF",
            borderTopWidth: 1, // Thin border on the top of the tab bar
            borderTopColor: "#D9D9D9", // Light gray color for the border
            height: 84, // Height of the tab bar
          },
        }}
      >
        {/* Home Tab */}
        <Tabs.Screen
          name="home" // The route name for the home screen
          options={{
            title: "Home", // Screen title
            headerShown: false, // Hides the header for this screen
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home} // Home icon
                color={color} // Dynamic color based on active state
                name="Home" // Tab name to display under the icon
                focused={focused} // Determines if the tab is active
              />
            ),
          }}
        />
        {/* Explore Tab */}
        <Tabs.Screen
          name="explore"
          options={{
            title: "Explore",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.explore} // Explore icon
                color={color}
                name="Explore"
                focused={focused}
              />
            ),
          }}
        />
        {/* Progress Tab */}
        <Tabs.Screen
          name="progress"
          options={{
            title: "Progress",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.progress} // Progress icon
                color={color}
                name="Progress"
                focused={focused}
              />
            ),
          }}
        />
        {/* Profile Tab */}
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile} // Profile icon
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>

      {/* Uncomment to show the loader when loading */}
      {/* <Loader isLoading={loading} /> */}

      {/* Status bar configuration */}
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabLayout;

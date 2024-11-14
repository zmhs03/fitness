import { StyleSheet, Text, View } from "react-native"; // Importing necessary components from React Native
import { SplashScreen, Stack } from "expo-router"; // Importing SplashScreen for managing app launch screen, and Stack for navigation
import { useFonts } from "expo-font"; // Importing the useFonts hook to load custom fonts
import { useEffect } from "react"; // Importing useEffect to run side effects like font loading

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  // Using useFonts hook to load custom fonts from the local assets
  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-BlackItalic": require("../assets/fonts/Roboto-BlackItalic.ttf"),
    "Roboto-BoldItalic": require("../assets/fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("../assets/fonts/Roboto-Italic.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "Roboto-LightItalic": require("../assets/fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("../assets/fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-ThinItalic": require("../assets/fonts/Roboto-ThinItalic.ttf"),
  });

  // useEffect hook to handle font loading completion
  useEffect(() => {
    if (error) throw error; // If there's an error loading the fonts, throw the error

    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once the fonts are loaded
    }
  }, [fontsLoaded, error]); // Re-run the effect when fontsLoaded or error changes

  // If fonts are not loaded yet, return null to prevent rendering
  if (!fontsLoaded) {
    return null; // Return nothing while fonts are loading
  }

  // If there is an error while loading fonts, return null
  if (!fontsLoaded && !error) {
    return null; // Prevent rendering in case of font loading failure
  }

  return (
    // <GlobalProvider> /
    <Stack>
      {/* Defining stack navigation for the app, each screen is linked to a specific route */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* Main tabs screen without showing the header */}
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      {/* Authentication screen without showing the header */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
      {/* Default homepage screen without the header */}
      <Stack.Screen name="search/[query]" options={{ headerShown: false }} />
      {/* Search screen with dynamic query parameter */}
      <Stack.Screen
        name="recipeDetails"
        options={{ title: "Recipe Details" }}
        // Recipe details screen with a custom title in the header
      />
      <Stack.Screen
        name="planDetails"
        options={{ title: "Plan Details" }}
        // Recipe details screen with a custom title in the header
      />
    </Stack>
  );

  //* </GlobalProvider>
};

export default RootLayout;

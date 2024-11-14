// import { Redirect, Stack } from "expo-router"; // Import navigation components

// import { Loader } from "../../components"; // Import Loader component to show a loading spinner
// import { useGlobalContext } from "../../context/GlobalProvider"; // Import global context to manage app state

// // AuthLayout component handles authentication flow and routing
// const AuthLayout = () => {
//   const { loading, isLogged } = useGlobalContext(); // Extract loading and isLogged state from global context

//   // If the user is logged in and loading is complete, redirect to the home page
//   if (!loading && isLogged) return <Redirect href="/home" />;

//   return (
//     <>
//       {/* Stack component to manage navigation between sign-in and sign-up screens */}
//       <Stack>
//         {/* Sign-in screen without a header */}
//         <Stack.Screen
//           name="sign-in"
//           options={{
//             headerShown: false, // Hides the header for the sign-in screen
//           }}
//         />
//         {/* Sign-up screen without a header */}
//         <Stack.Screen
//           name="sign-up"
//           options={{
//             headerShown: false, // Hides the header for the sign-up screen
//           }}
//         />
//       </Stack>

//       {/* Show the loader while the app is loading */}
//       <Loader isLoading={loading} />

//
//   );
// };

// export default AuthLayout;

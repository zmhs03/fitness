// import { useState } from "react";
// import { Link, router } from "expo-router"; // Import routing components
// import { SafeAreaView } from "react-native-safe-area-context"; // Import SafeAreaView to handle safe area for devices
// import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native"; // Import basic React Native components
// import { images } from "../../constants"; // Import images from constants
// import { createUser } from "../../lib/appwrite"; // Import function to create a user through Appwrite
// import { CustomButton, FormField } from "../../components"; // Import custom components for button and form fields
// import { useGlobalContext } from "../../context/GlobalProvider"; // Import global context to manage user state

// // SignUp component for user registration
// const SignUp = () => {
//   const { setUser, setIsLogged } = useGlobalContext(); // Access global context to manage user and login state

//   const [isSubmitting, setSubmitting] = useState(false); // State to track submission status
//   const [form, setForm] = useState({
//     // State to manage form input fields
//     username: "",
//     email: "",
//     password: "",
//   });

//   // Function to handle form submission
//   const submit = async () => {
//     // Check if any form field is empty, if so show an alert
//     if (form.username === "" || form.email === "" || form.password === "") {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }

//     setSubmitting(true); // Set submitting state to true to show loader
//     try {
//       // Call createUser function to register the user
//       const result = await createUser(form.email, form.password, form.username);
//       setUser(result); // Set the global user state
//       setIsLogged(true); // Set the user as logged in

//       router.replace("/home"); // Redirect to the home page after successful sign-up
//     } catch (error) {
//       // Show an error alert if the registration fails
//       Alert.alert("Error", error.message);
//     } finally {
//       setSubmitting(false); // Reset submitting state after request completes
//     }
//   };

//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <ScrollView>
//         <View
//           className="w-full flex justify-center h-full px-4 my-6"
//           style={{
//             minHeight: Dimensions.get("window").height - 100, // Ensure the view takes up the full height minus some space
//           }}
//         >
//           {/* Display logo image */}
//           <Image
//             source={images.logo}
//             resizeMode="contain"
//             className="w-[115px] h-[34px]"
//           />

//           {/* Title for the sign-up screen */}
//           <Text className="text-2xl font-semibold text-white mt-10 font-rsemibold">
//             Sign Up to Aora
//           </Text>

//           {/* Form fields for username, email, and password */}
//           <FormField
//             title="Username"
//             value={form.username}
//             handleChangeText={(e) => setForm({ ...form, username: e })}
//             otherStyles="mt-10"
//           />

//           <FormField
//             title="Email"
//             value={form.email}
//             handleChangeText={(e) => setForm({ ...form, email: e })}
//             otherStyles="mt-7"
//             keyboardType="email-address" // Email field should trigger the email keyboard
//           />

//           <FormField
//             title="Password"
//             value={form.password}
//             handleChangeText={(e) => setForm({ ...form, password: e })}
//             otherStyles="mt-7"
//           />

//           {/* Sign-up button that triggers the form submission */}
//           <CustomButton
//             title="Sign Up"
//             handlePress={submit}
//             containerStyles="mt-7"
//             isLoading={isSubmitting} // Show loading state while submitting
//           />

//           {/* Link to navigate to sign-in page if the user already has an account */}
//           <View className="flex justify-center pt-5 flex-row gap-2">
//             <Text className="text-lg text-gray-100 font-rregular">
//               Have an account already?
//             </Text>
//             <Link
//               href="/sign-in"
//               className="text-lg font-rsemibold text-secondary"
//             >
//               Login
//             </Link>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default SignUp;

import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native"; // Importing necessary components from React Native
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; // Importing icons from Expo vector icons
import styles from "../../stylesheetProfile"; // Importing external styles for this component

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      {/* Displays the header with the text 'Profile' */}
      <Text style={styles.header}>Profile</Text>

      {/* Profile Information Section */}
      <View style={styles.profileContainer}>
        {/* Profile Picture */}
        <Image
          source={require("../../assets/images/profilepic.jpeg")} // Profile picture sourced from local assets
          style={styles.profileImage} // Styling applied to the image
        />
        {/* User's Name */}
        <Text style={styles.userName}>User Name</Text>
        {/* User's Email */}
        <Text style={styles.userEmail}>username@example.com</Text>
      </View>

      {/* Settings Options Section */}
      {/* Contains multiple touchable options for navigating to different settings */}
      <View style={styles.optionsContainer}>
        {/* Option 1: Personal Information */}
        <TouchableOpacity style={styles.optionBox}>
          <Ionicons name="person-outline" size={24} style={styles.icon} />{" "}
          {/* Icon for personal information */}
          <Text style={styles.optionText}>Personal Information</Text>{" "}
          {/* Text for the option */}
        </TouchableOpacity>

        {/* Option 2: Notifications */}
        <TouchableOpacity style={styles.optionBox}>
          <Ionicons
            name="notifications-outline"
            size={24}
            style={styles.icon}
          />{" "}
          {/* Icon for notifications */}
          <Text style={styles.optionText}>Notifications</Text>{" "}
          {/* Text for the option */}
        </TouchableOpacity>

        {/* Option 3: Units of Measurements */}
        <TouchableOpacity style={styles.optionBox}>
          <MaterialCommunityIcons name="ruler" size={24} style={styles.icon} />{" "}
          {/* Icon for units of measurement */}
          <Text style={styles.optionText}>Units of Measurements</Text>{" "}
          {/* Text for the option */}
        </TouchableOpacity>

        {/* Option 4: Goals */}
        <TouchableOpacity style={styles.optionBox}>
          <Ionicons name="trophy-outline" size={24} style={styles.icon} />{" "}
          {/* Icon for goals */}
          <Text style={styles.optionText}>Goals</Text>{" "}
          {/* Text for the option */}
        </TouchableOpacity>

        {/* Option 5: Completed Plans */}
        <TouchableOpacity style={styles.optionBox}>
          <Ionicons
            name="checkmark-done-outline"
            size={24}
            style={styles.icon}
          />{" "}
          {/* Icon for completed plans */}
          <Text style={styles.optionText}>Completed Plans</Text>{" "}
          {/* Text for the option */}
        </TouchableOpacity>
      </View>

      {/* Log Out Option */}
      {/* Touchable area to log out of the account */}
      <TouchableOpacity style={styles.logoutContainer}>
        <Ionicons name="log-out-outline" size={24} style={styles.icon} />{" "}
        {/* Icon for log out */}
        <Text style={styles.logoutText}>Log Out</Text>{" "}
        {/* Text indicating the log out option */}
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

// Component to display details of a specific workout plan
function planDetails({ route, navigation }) {
  // Extract parameters from the route object
  const params = route?.params;
  const id = route?.params?.id;

  // If no workout plan parameters are passed, display a message
  if (!params) {
    return (
      <View>
        <Text>No workout plans to display</Text>
      </View>
    );
  }

  // Display workout plan details in a scrollable view
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Conditionally render the workout plan image if it exists */}
      {workoutPlan.image && (
        <Image source={workoutPlan.image} style={styles.image} />
      )}
      {/* Display the workout plan name */}
      <Text style={styles.title}>{workoutPlan.name}</Text>
      {/* Display the workout duration */}
      <Text style={styles.info}>Duration: {workoutPlan.duration}</Text>
      {/* Display the workout intensity */}
      <Text style={styles.info}>Intensity: {workoutPlan.intensity}</Text>
      {/* Section for the description of the workout */}
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{workoutPlan.description}</Text>

      {/* Conditionally render the workout steps if available */}
      {workoutPlan.steps && workoutPlan.steps.length > 0 && (
        <>
          <Text style={styles.sectionTitle}>Workout Steps</Text>
          {/* Display each step of the workout with its corresponding number */}
          {workoutPlan.steps.map((step, index) => (
            <Text key={index} style={styles.step}>
              {index + 1}. {step}
            </Text>
          ))}
        </>
      )}
    </ScrollView>
  );
}

// Styles for the workout details page
const styles = StyleSheet.create({
  container: {
    padding: 16, // Add padding to the container
    backgroundColor: "#fff", // Set background to white
  },
  image: {
    width: "100%", // Ensure the image takes up full width
    height: 200, // Set a fixed height for the image
    borderRadius: 10, // Round the corners of the image
  },
  title: {
    fontSize: 24, // Set title font size
    fontWeight: "bold", // Make the title bold
    marginVertical: 8, // Add vertical margins
  },
  info: {
    fontSize: 16, // Set font size for info text
    marginBottom: 4, // Add bottom margin to each info text
  },
  sectionTitle: {
    fontSize: 20, // Set font size for section titles
    fontWeight: "600", // Set weight to semi-bold
    marginVertical: 10, // Add vertical margins for spacing
  },
  description: {
    fontSize: 16, // Set font size for description text
    marginBottom: 10, // Add bottom margin for spacing
  },
  step: {
    fontSize: 16, // Set font size for each step
    marginBottom: 4, // Add bottom margin to each step
  },
});

// Export the component as default for use in other parts of the app
export default planDetails;

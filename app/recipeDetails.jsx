import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

function RecipeDetails({ route, navigation }) {
  const params = route?.params;

  const id = route?.params?.id;

  if (!params) {
    return (
      <View>
        <Text>No recipes available</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={recipe.image} style={styles.image} />
      <Text style={styles.title}>{recipe.title}</Text>
      <Text style={styles.info}>Calories: {recipe.calories}</Text>
      <Text style={styles.info}>Time: {recipe.time}</Text>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      {recipe.ingredients.map((ingredient, index) => (
        <Text key={index} style={styles.ingredient}>
          {ingredient}
        </Text>
      ))}
      <Text style={styles.sectionTitle}>Instructions</Text>
      <Text style={styles.instructions}>{recipe.instructions}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  ingredient: {
    fontSize: 16,
    marginBottom: 2,
  },
  instructions: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default RecipeDetails;

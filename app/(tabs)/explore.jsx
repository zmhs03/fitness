import React, { useState, useEffect } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "../../stylesheetExplore";
import { icons } from "../../constants";

const workoutPlans = [
  {
    title: "Barre Cardio: Low Impact Dancer Workout",
    category: "Beginner",
    image: require("../../assets/images/barre.jpg"),
    details: "Low Impact • 30 Minutes",
  },
  {
    title: "Beginner Pilates: 30-Minute At-Home Mat Routine",
    category: "Beginner",
    image: require("../../assets/images/pilates.jpg"),
    details: "Mat • 30 Minutes",
  },
  {
    title: "Functional Workout: Total Body Workout",
    category: "Intermediate",
    image: require("../../assets/images/functional.jpg"),
    details: "Equipment Optional • Full Body • 45 Minutes",
  },
  {
    title: "Working to Lose Fat",
    category: "Beginner",
    image: require("../../assets/images/losefat.jpg"),
    details: "High Intensity • 20 Minutes",
  },
  {
    title: "Full Body Workout Routine",
    category: "Beginner",
    image: require("../../assets/images/fullbody.jpg"),
    details: "Bodyweight • 40 Minutes",
  },
  {
    title: "Cardio",
    category: "Intermediate",
    image: require("../../assets/images/download (15).jpeg"),
    details: "High Intensity • 30 Minutes",
  },
  {
    title: "Workout at Home",
    category: "Intermediate",
    image: require("../../assets/images/home.jpg"),
    details: "No Equipment • 25 Minutes",
  },
  {
    title: "Lifting Full Body Workout Routine",
    category: "Beginner",
    image: require("../../assets/images/liftingfb.jpg"),
    details: "Weightlifting • 60 Minutes",
  },
  {
    title: "Sculpt & Strength: 12-Week Power Plan",
    category: "Intermediate",
    image: require("../../assets/images/poweplan.jpg"),
    details: "Full Body • 1 Hour",
  },
];

const nutritionRecipes = [
  {
    title: "Shakshuka",
    calories: " 354 Kcal",
    time: "30 Min",
    image: require("../../assets/images/Shakshuka.jpeg"),
  },
  {
    title: "Farfalle Pasta Salad",
    calories: "236 Kcal",
    time: "25 Min",
    image: require("../../assets/images/Bow Tie Pasta Salad.jpeg"),
  },
  {
    title: "Bibimbap",
    calories: "689 Kcal",
    time: "1 Hr 10 Min",
    image: require("../../assets/images/Korean Bibimbap.jpeg"),
  },
  {
    title: "Overnight Oats",
    calories: "272 Kcal",
    time: "25 Min",
    image: require("../../assets/images/Overnight Oats.jpeg"),
  },
  {
    title: "Eggs Benedict",
    calories: "453 Kcal",
    time: "20 Min",
    image: require("../../assets/images/Eggs Benedict.jpeg"),
  },
  {
    title: "Beef Bulgogi Kimbap",
    calories: "455 Kcal",
    time: "40 Min",
    image: require("../../assets/images/Beef Bulgogi Kimbap.jpeg"),
  },
  {
    title: "Black Pepper Beef",
    calories: "441 Kcal",
    time: "30 Min",
    image: require("../../assets/images/Black Pepper Beef.jpeg"),
  },
];

const getRandomWorkout = () => {
  const randomIndex = Math.floor(Math.random() * workoutPlans.length);
  return workoutPlans[randomIndex];
};

const renderWorkoutCategory = (title, data) => (
  <View>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View style={styles.workoutRow}>
      {data.map((item, index) => (
        <TouchableOpacity key={index} style={styles.workoutItem}>
          <Image source={item.image} style={styles.workoutImage} />
          <Text style={styles.workoutCategory}>{item.category}</Text>
          <Text style={styles.workoutTitle}>{item.title}</Text>
          <Text style={styles.workoutDetails}>{item.details}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
);

export default function Explore() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState("Workouts");
  const [workoutOfTheDay, setWorkoutOfTheDay] = useState(null);
  const [recommendedWorkouts, setRecommendedWorkouts] = useState([]);

  useEffect(() => {
    // Generate random workouts for 'Workout of the Day' and 'Recommended Workouts'
    setWorkoutOfTheDay(getRandomWorkout()); // Get one random workout for 'Workout of the Day'

    const randomRecommended = [];
    for (let i = 0; i < 3; i++) {
      randomRecommended.push(getRandomWorkout()); // Get three random workouts for recommendations
    }
    setRecommendedWorkouts(randomRecommended);
  }, []); // Tracks active tab

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/profilepic.jpeg")}
          style={styles.profileImage}
        />
        <View style={styles.headerIcons}>
          <Image source={icons.search} style={styles.icon} />
          <Image source={icons.bookmark} style={styles.icon} />
          <Image source={icons.notifications} style={styles.icon} />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Workouts" && styles.tabActive,
          ]}
          onPress={() => setActiveTab("Workouts")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Workouts" && styles.tabTextActive,
            ]}
          >
            Workouts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Browse Plans" && styles.tabActive,
          ]}
          onPress={() => setActiveTab("Browse Plans")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Browse Plans" && styles.tabTextActive,
            ]}
          >
            Browse Plans
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "Nutrition" && styles.tabActive,
          ]}
          onPress={() => setActiveTab("Nutrition")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Nutrition" && styles.tabTextActive,
            ]}
          >
            Nutrition
          </Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        {activeTab === "Workouts" && (
          <>
            <Text style={styles.sectionTitle}>Workout of the Day</Text>
            {workoutOfTheDay && (
              <View style={styles.placeholderBox}>
                <TouchableOpacity
                  style={styles.workoutItem}
                  onPress={() =>
                    router.push({
                      pathname: "workoutPlanDetails", // Navigate to the workout plan details page
                      params: { workoutPlan: workoutOfTheDay }, // Pass the workout plan data
                    })
                  }
                >
                  <Image
                    source={workoutOfTheDay.image}
                    style={styles.workoutImage}
                  />
                  <View style={styles.planDetails}>
                    <Text style={styles.workoutCategory}>
                      {workoutOfTheDay.category}
                    </Text>
                    <Text style={styles.workoutTitle}>
                      {workoutOfTheDay.title}
                    </Text>
                    <Text style={styles.workoutInfo}>
                      {workoutOfTheDay.details}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}

            <Text style={styles.sectionTitle}>Recommended Workouts</Text>
            <View style={styles.workoutRow}>
              {recommendedWorkouts.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.workoutItem}
                  onPress={() =>
                    router.push({
                      pathname: "workoutPlanDetails", // Navigate to the workout plan details page
                      params: { workoutPlan: item }, // Pass the workout plan data
                    })
                  }
                >
                  <Image source={item.image} style={styles.workoutImage} />
                  <View style={styles.planDetails}>
                    <Text style={styles.workoutCategory}>{item.category}</Text>
                    <Text style={styles.workoutTitle}>{item.title}</Text>
                    <Text style={styles.workoutInfo}>{item.details}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {activeTab === "Browse Plans" && (
          <>
            <View style={styles.planContainer}>
              {workoutPlans.map((plan, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.planBox}
                  onPress={() =>
                    router.push({
                      pathname: "workoutPlanDetails", // Navigate to the workout plan details page
                      params: { workoutPlan: plan }, // Pass the workout plan data
                    })
                  }
                >
                  <Image source={plan.image} style={styles.planImage} />
                  <View style={styles.planDetails}>
                    <Text style={styles.planCategory}>{plan.category}</Text>
                    <Text style={styles.planTitle}>{plan.title}</Text>
                    <Text style={styles.planInfo}>{plan.details}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}

        {activeTab === "Nutrition" && (
          <>
            <View style={styles.recipeContainer}>
              {nutritionRecipes.map((recipe, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.recipeCard}
                  onPress={() =>
                    router.push({
                      pathname: "recipeDetails",
                      params: { recipe },
                    })
                  }
                >
                  <Image source={recipe.image} style={styles.recipeImage} />
                  <View style={styles.recipeDetails}>
                    <Text style={styles.recipeCalories}>{recipe.calories}</Text>
                    <Text style={styles.recipeTitle}>{recipe.title}</Text>
                    <Text style={styles.recipeTime}>{recipe.time}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </>
        )}
        <View style={{ height: 25 }} />
      </ScrollView>
    </View>
  );
}

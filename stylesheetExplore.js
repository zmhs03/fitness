//stylesheetExplore
import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 50,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 16,
    resizeMode: "contain",
  },
  // Tabs
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "#d9d9d9",
  },
  tabActive: {
    backgroundColor: "#34A853", // Active tab background
  },
  tabText: {
    color: "#000", // Default tab text color
    fontWeight: "bold",
  },
  tabTextActive: {
    color: "#fff", // Text color for active tab
  },
  // Content
  content: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#184F27",
  },
  placeholderBox: {
    height: 300,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
    marginBottom: 15,
  },
  placeholderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  placeholderItem: {
    width: "30%",
    height: 100,
    backgroundColor: "#d9d9d9",
    borderRadius: 10,
  },

  // Styles for Workout tab
  workoutRow: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  workoutItem: {
    width: "100%", // Full width
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "#f8f8f8", // Light background for cards
  },
  workoutImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  workoutDetails: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(99, 99, 99, 0.8)", // Semi-transparent black overlay for text visibility
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  workoutCategory: {
    fontSize: 16,
    color: "#34A853", // Category tag color
    fontWeight: "bold",
    marginBottom: 5,
  },
  workoutTitle: {
    fontSize: 18, // Slightly larger font size for title emphasis
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  workoutInfo: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
  // Styles for Browse Plans tab
  planContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  planBox: {
    width: "100%", // Full width
    borderRadius: 15,
    marginBottom: 20,
    overflow: "hidden",
    backgroundColor: "#f8f8f8", // Light background for cards
  },
  planImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  planDetails: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(99, 99, 99, 0.8)", // Semi-transparent black overlay for text visibility
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  planCategory: {
    fontSize: 16,
    color: "#34A853", // Category tag color
    fontWeight: "bold",
    marginBottom: 5,
  },
  planTitle: {
    fontSize: 18, // Slightly larger font size for title emphasis
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
  },
  planInfo: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },

  recipeContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  recipeCard: {
    width: "48%", // To fit two cards per row with spacing
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginBottom: 15,
    elevation: 3, // For shadow on Android
    shadowColor: "#000", // For shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recipeImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recipeDetails: {
    padding: 10,
  },
  recipeCalories: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#34A853",
    marginBottom: 5,
  },
  recipeTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#000",
  },
  recipeTime: {
    fontSize: 14,
    color: "#636363",
    fontWeight: "bold",
  },
});

export default styles;

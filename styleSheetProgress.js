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
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 50,
    marginBottom: 20,
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

  calendarContainer: {
    paddingHorizontal: 20,
  },
  monthText: {
    fontSize: 18,
    fontWeight: "600",
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  dayText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
  },
  selectedDay: {
    color: "#fff",
    backgroundColor: "#34A853",
    padding: 10,
    borderRadius: 20,
  },

  content: {
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  contentContainer: {
    paddingHorizontal: 4,
    paddingBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    color: "#184F27",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },

  // Rectangular Containers for Each Section
  rectangleContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 3,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  activityRingContainer: {
    height: 200,
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  },
  trendContainer: {
    height: 200, // Specific height for Trends
  },
  halfWidthContainer: {
    width: "48%", // Half-width containers
    height: 150,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  circleText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  activityLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
});

export default styles;

//stylesheetHome
import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
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
  banner: {
    marginHorizontal: 16,
    marginVertical: 24,
    borderRadius: 10,
    height: 183,
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#34A853",
    elevation: 3,
  },

  bannerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  section: {
    marginHorizontal: 16,
    marginTop: 24,

    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#184f27",
  },
  horizontalCardRow: {
    flexDirection: "row",
  },
  cardLarge: {
    width: 300,
    height: 310,
    elevation: 3,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    marginRight: 20,
    marginBottom: 24,
  },
  cardImage: {
    width: "100%",
    height: "70%",
    resizeMode: "cover",
  },
  cardOverlay: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardLevel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    backgroundColor: "rgba(99, 99, 99, 0.8)",
    padding: 4,
    borderRadius: 5,
  },
  favoriteIcon: {
    backgroundColor: "rgba(99, 99, 99, 0.8)",
    padding: 5,
    borderRadius: 50,
  },
  iconSmall: {
    width: 16, // Smaller icon for inline with text
    height: 16,
    marginRight: 5, // Space between the clock icon and the duration text
  },
  cardTitle: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 18,
    color: "#000",
    paddingHorizontal: 10,
  },
  timeContainer: {
    flexDirection: "row", // Align clock icon and duration in a row
    alignItems: "center", // Ensure vertical alignment
    marginTop: 4, // Space between the title and time
    paddingHorizontal: 10,
  },
  cardDuration: {
    color: "#34A853",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardMedium: {
    width: 230,
    elevation: 3,
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginRight: 20,
    marginBottom: 24,
  },
  cardMedium2: {
    width: 159,
    height: 165,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    marginRight: 20,
    marginBottom: 24,
  },
  cardSmall: {
    width: 60, // Set to desired width (150px would be too large for three in a row)
    height: 60, // Set height to the same value for circular shape
    backgroundColor: "#d9d9d9",
    borderRadius: 30, // Half of width/height for a perfect circle
    marginBottom: 24,
    marginRight: 20,
    alignItems: "center", // Center content if needed
    justifyContent: "center", // Center content if needed
  },

  // New Styles for Featured Collections
  featuredCollectionsSection: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 24,
  },
  featuredCollectionsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#184f27",
  },

  featuredHorizontalCardRow: {
    flexDirection: "row",
  },
  featuredCardMedium2: {
    width: 159,
    height: 156,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "#fff",
    marginRight: 20,
    marginBottom: 24,
  },
  featuredCardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  featuredCardOverlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(99, 99, 99, 0.5)", // Semi-transparent black overlay for text visibility
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  featuredCardTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center", // Center title horizontally
  },
});

import { StyleSheet, Platform, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "#184F27",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 50,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: "90%",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  userName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 14,
    color: "#888",
  },

  optionsContainer: {
    width: "90%",

    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  optionBox: {
    width: "90%",
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  icon: {
    marginRight: 15,
    color: "#6e6e6e",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  logoutContainer: {
    width: "90%",
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  logoutText: {
    fontSize: 16,
    color: "#D9534F", // Red color for emphasis
  },
  infoContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9F9F9",
  },
  infoHeader: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  infoFieldContainer: {
    marginBottom: 20,
  },
  infoLabel: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  infoInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  changePasswordText: {
    color: "#34A853",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
});

export default styles;

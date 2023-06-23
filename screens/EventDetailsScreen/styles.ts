import { StyleSheet } from "react-native";

export default StyleSheet.create({
  layout: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#ffffff",
  },
  headerImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    maxWidth: "60%",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
});

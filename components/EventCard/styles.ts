import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#4f42ef",
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
  details: {
    paddingHorizontal: 10,
    justifyContent: "center",
    width: "70%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    color: "#ffffff",
    fontSize: 12,
  },
  category: {
    backgroundColor: "#080520",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 2,
    maxWidth: 100,
  },
  categoryTitle: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 13,
  },
});

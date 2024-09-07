import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF3B30", // Red color
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 10,
  },
  message: {
    fontSize: 16,
    color: "#6D6D6D",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 400,
    alignSelf: "center",
    marginTop: 20,
  },
  timerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  timerBox: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  timerText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  timerLabel: {
    fontSize: 14,
    color: "#6D6D6D",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  cancelButton: {
    backgroundColor: "#F3F3F3",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginLeft: 30,
  },
  cancelButtonText: {
    color: "#6D6D6D",
    fontSize: 16,
  },
  notifyButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginRight: 30,
  },
  notifyButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;

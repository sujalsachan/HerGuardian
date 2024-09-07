import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const LoadingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Her</Text>
        <Text style={styles.title2}>Guardian</Text>
      </View>
      <Image
        source={require("../../../assets/ladyloadingpage.png")}
        style={styles.mainImage}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoadingPage;

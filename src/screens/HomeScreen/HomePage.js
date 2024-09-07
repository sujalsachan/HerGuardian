import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Her</Text>
          <Text style={styles.title2}>Guardian</Text>
        </View>
        <Image
          source={require("../../../assets/account_circle.png")}
          style={styles.profile}
        />
      </View>
      <View style={styles.container1}>
        <Text style={styles.title3}>Safety at your fingertips</Text>
        <Text style={styles.title4}>With HerGuardian, you can</Text>
        <Image
          source={require("../../../assets/ladyHomePage.png")}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CrimeReportPage")}
        >
          <Text style={styles.buttonText}>Crime Reporting</Text>
          <Text style={styles.buttonText2}>
            Report a Crime and update the heatmap.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CommunityForumPage ")}
        >
          <Text style={styles.buttonText}>Community Forum</Text>
          <Text style={styles.buttonText2}>
            Help the person who is near you.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SOSSupportPage")}
        >
          <Text style={styles.buttonText}>SOS Support</Text>
          <Text style={styles.buttonText2}>
            Quickly respond to SOS incidents.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HighRishPage")}
        >
          <Text style={styles.buttonText}>High Risk Areas</Text>
          <Text style={styles.buttonText2}>
            Get Alertswhen you are in high risk area.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

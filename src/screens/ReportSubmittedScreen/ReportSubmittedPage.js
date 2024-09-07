import React from 'react';
import { View, Text, TouchableOpacity,Image } from 'react-native';
import styles from './styles';

const ReportSubmittedPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
          source={require("../../../assets/submitted.png")}
          style={styles.mainImage}
          resizeMode="contain"
        />
      <Text style={styles.thankYouText}>Thank you for submitting this report</Text>
      <Text style={styles.detailsText}>
        We've received your report and will get back to you within 24 hours. Your safety is our priority.
      </Text>
      <Image
          source={require("../../../assets/Location.png")}
          style={styles.mainImage}
          resizeMode="contain"
        />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomePage')}>
        <Text style={styles.buttonText}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportSubmittedPage;

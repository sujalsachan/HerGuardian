import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image } from 'react-native';
import styles from './styles';

const CrimeReportPage = ({navigation}) => {
  const [location, setLocation] = useState('');
  const [details, setDetails] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report an incident</Text>
      <Image
          source={require("../../../assets/s.png")}
          style={styles.mainImage}
          resizeMode="cover"
        />
      <TextInput
        style={styles.input}
        placeholder="Location of the incident"
        value={location}
        onChangeText={setLocation}
        placeholderTextColor={"white"}
      />

      <TextInput
        style={styles.textArea}
        placeholder="Details about the incident"
        value={details}
        onChangeText={setDetails}
        placeholderTextColor={"white"}
        multiline
      />

      <TouchableOpacity style={styles.submitButton} onPress={()=> navigation.navigate('ReportSubmittedPage')}>
        <Text style={styles.submitButtonText}>Submit Report</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CrimeReportPage;

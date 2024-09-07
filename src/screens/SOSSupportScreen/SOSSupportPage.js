import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';

const emergencyContacts = [
  { id: '1', name: 'Mom', phone: '+1 832-392-3939' },
  { id: '2', name: 'Dad', phone: '+1 832-392-3939' },
  { id: '3', name: 'Best friend', phone: '+1 832-392-3939' },
];

const SOSSupportPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sosText}>SOS Support</Text>

        <Text style={styles.t1}>Activate Loud Alarm</Text>
        <Text style={styles.t2}>Hold down for 3 seconds to activate a loud alarm</Text>
      <TouchableOpacity style={styles.activateButton}  onPress={()=>navigation.navigate("SafetyAlarmScreen")}>
        <Text style={styles.activateButtonText}>Activate Alarm</Text>
      </TouchableOpacity>

      <Text style={styles.emergencyText}>Emergency Contacts</Text>

      <FlatList
        data={emergencyContacts}
        renderItem={({ item }) => (
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhone}>{item.phone}</Text>
            <TouchableOpacity style={styles.callButton}>
              <Text style={styles.callButtonText}>Call</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <Text style={styles.messageText}>Send pre-set emergency messages</Text>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>I'm in danger. Please call the police.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>I'm in danger. Please help me.</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Customize your Message....</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SOSSupportPage;

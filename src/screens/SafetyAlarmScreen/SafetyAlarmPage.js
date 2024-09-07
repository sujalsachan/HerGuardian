import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from './styles';

const SafetyAlarmScreen = ({ navigation }) => {
  const [minutes, setMinutes] = useState(3);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Safety alarm</Text>
        <Text style={styles.subTitle}>Alarm activated</Text>
      </View>
      
      <Text style={styles.message}>
        Your alarm has been activated. We will notify the authorities in 3 minutes if you don’t cancel it.
      </Text>
      
      <Image 
        source={require('../../../assets/alarm.png')} 
        style={styles.image}
      />
      
      <View style={styles.timerContainer}>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{minutes < 10 ? `0${minutes}` : minutes}</Text>
          <Text style={styles.timerLabel}>Minutes</Text>
        </View>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>{seconds < 10 ? `0${seconds}` : seconds}</Text>
          <Text style={styles.timerLabel}>Seconds</Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('SOSSupportPage')}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notifyButton} onPress={() => {/* Logic for notifying contacts */}}>
          <Text style={styles.notifyButtonText}>Notify contacts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SafetyAlarmScreen;

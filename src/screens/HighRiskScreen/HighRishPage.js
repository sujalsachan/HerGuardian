import { Text, View,Image,FlatList } from 'react-native'
import React from 'react'
import styles from './styles';

const emergencyContacts = [
    { id: '1', name: 'Robbery: 3:00 PM', phone: '2km away' },
    { id: '2', name: 'Pickpocketing: 5:00 PM', phone: '1.3km away' },
    { id: '3', name: 'Burglary: 6:00 PM', phone: '5 km away' },
  ];

export default function HighRishPage() {
  return (
    <View style={styles.container}>
        
        <Image
          source={require("../../../assets/heatmap.png")}
          style={styles.mainImage}
          resizeMode="cover"
        />

        <Text style={styles.t1}>
            High-Risk Areas
        </Text>    
        <FlatList
        data={emergencyContacts}
        renderItem={({ item }) => (
          <View style={styles.contactContainer}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactPhone}>{item.phone}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
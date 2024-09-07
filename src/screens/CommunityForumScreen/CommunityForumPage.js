import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

const posts = [
  { id: '1', user: 'Emily', text: 'Felt someone was following me.' },
  { id: '2', user: 'Lisa', text: 'I am waiting for help, someone is following me.' },
];

const CommunityForumPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Forum</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search users, posts..."
      />

      <Text style={styles.alertsTitle}>ALERTS</Text>
      <Text style={styles.alertText}>Emily is in danger, 0.5 km away</Text>
      <Text style={styles.alertText}>Riya needs assistance, 2 km away</Text>

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postUser}>{item.user}</Text>
            <Text style={styles.postText}>{item.text}</Text>
            <TouchableOpacity style={styles.helpButton}>
              <Text style={styles.helpButtonText}>Offer Help</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CommunityForumPage;

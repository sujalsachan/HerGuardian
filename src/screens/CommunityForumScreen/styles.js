import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop:60,
    backgroundColor: '#F4E5E9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  alertsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertText: {
    fontSize: 16,
    color: '#d32f2f',
    marginBottom: 10,
  },
  postContainer: {
    backgroundColor: '#f1f1f1',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  postUser: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postText: {
    fontSize: 14,
    marginBottom: 10,
  },
  helpButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  helpButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default styles;

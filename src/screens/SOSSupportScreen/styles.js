import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4E5E9',
    paddingTop:80
  },
  sosText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 20,
    textAlign: 'center',
  },
  t1:{
    fontSize:20,
    fontWeight:'500',
    alignSelf:'center',
    marginBottom:16
  },
  t2:{
    fontSize:16,
    alignSelf:'center',
    marginBottom:16
  },
  activateButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  activateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  emergencyText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth:.5,
  },
  contactName: {
    fontSize: 16,
  },
  contactPhone: {
    fontSize: 16,
    color: '#666',
  },
  callButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 4,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  messageText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  messageButton: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom:14,
    borderWidth:.5
  },
  messageButtonText: {
    color: '#333',
    fontSize: 16,
  },
});

export default styles;

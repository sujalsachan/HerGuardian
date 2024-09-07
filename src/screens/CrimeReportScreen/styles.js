import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4E5E9',
    justifyContent:'center',
    alignItems:'center'
  },
  mainImage: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"red"
  },
  input: {
    backgroundColor: '#342A2A',
    color:"white",
    padding: 15,
    width:'90%',
    borderRadius: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  textArea: {
    width:'90%',
    padding: 15,
    color:"white",
    backgroundColor: '#342A2A',
    borderRadius: 10,
    height: 120,
    fontSize: 16,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  submitButton: {
    width:'90%',
    backgroundColor: '#d32f2f',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;

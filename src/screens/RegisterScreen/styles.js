import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 10,
  },
  signUpButton: {
    backgroundColor: '#d32f2f',
    paddingVertical: 15,
    width:"100%",
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  signUpText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alreadyAccountText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  googleSignUpButton: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width:"100%"
  },
  googleSignUpText: {
    color: '#333',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 40,
  },
});

export default styles;

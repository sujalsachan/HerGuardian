import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4E5E9',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#d32f2f',
    marginTop: 20,
    letterSpacing:0
  },
  title2:{
    fontSize: 40,
    fontWeight: '900',
    color: 'black',
    marginTop: 20,
  },
  textContainer:{
    flexDirection:'row'
  },
  mainImage: {
    width: "100%",
    height: 500,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 40,
    paddingHorizontal:55,
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'900'
  },
});

export default styles;

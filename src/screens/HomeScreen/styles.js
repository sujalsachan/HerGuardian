import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header:{
    flexDirection:'row',
    width:"90%",
  },
  logo:{

  },
    container :{
        flex : 1,
        alignItems:'center',
    backgroundColor:"#FF8484",
    justifyContent:'center',
    paddingTop:60
    },
  container1: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"#FF8484",
    padding: 20,
    width:"100%"
  },
  container2: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    width:"100%",
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
  },
  profile:{
    position:'absolute',
    right:1,

  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#d32f2f',
    letterSpacing:0
  },
  title2:{
    fontSize: 32,
    fontWeight: '900',
    color: 'black',
  },
  title3:{
    fontSize: 32,
    fontWeight: '900',
    color: 'white',
    alignSelf:'flex-start',
    marginBottom:20
  },
  title4:{
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
    alignSelf:'flex-start'
  },
  textContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
  },
  mainImage: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF3C3C',
    padding: 15,
    borderRadius: 30,
    width: '85%',
    alignItems: 'center',
    marginVertical: 10,
    textAlign:'left'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight:'900',
    textAlign:'left'

  },
  buttonText2: {
    color: 'white',
    fontSize: 14,
    fontWeight:'700'
  },
});

export default styles;

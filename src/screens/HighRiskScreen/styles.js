import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainImage:{
    width:"100%",
    height:600
  },
  t1:{
    fontSize:16,
    fontWeight:'600',
    padding:20
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginBottom: 10,
    elevation:1
  },
  contactName: {
    fontSize: 16,
    fontWeight:'500'
  },
  contactPhone: {
    fontSize: 16,
    color: 'red',
  },
});

export default styles;

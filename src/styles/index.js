import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial'
    },
    logo:{
      position: 'absolute',
      backgroundColor: 'lightblue',
      fontSize: 40,
      padding: 30,
      top: 100,
    },
    time:{
      fontSize: 30,
  
    },
    buttons:{
      width: '95%',
      top: 30,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    vai:{
      backgroundColor: 'green',
      width: 150,
      height: 50,
      justifyContent: 'center',
      borderRadius: 15,
    },
    pausar:{
      backgroundColor: 'orange'
    },
    text:{
      textAlign: 'center',
      fontSize: 20,
    },
    zerar:{
      backgroundColor: '#d91818',
      width: 150,
      height: 50,
      justifyContent: 'center',
      borderRadius: 15,
    },
});

export default styles

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
      
        <AppHeader />
       
        <Text style={styles.textContainer}>Names</Text>
        <Text style={styles.textContainer}>1.ISHITHA</Text>
        <Text style={styles.textContainer}>2.HARINI</Text>
        <Text style={styles.textContainer}>3.NIDHA</Text>
        <Text style={styles.textContainer}>4.NIHARIKA</Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          >
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>

      

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          >
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>

          
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          >
          <Text style={styles.buttonText}>P</Text>
        </TouchableOpacity>

        

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          >
          <Text style={styles.buttonText}>A</Text>
        </TouchableOpacity>



        
        
     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 1,
    marginLeft: 250,
    marginEnd: 10,
    width: 50,
    height: 50,
  },
  

  
});




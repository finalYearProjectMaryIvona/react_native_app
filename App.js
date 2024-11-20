import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const YourApp = ({ navigation }) => {
  const navigateToObjectDetection = () => {
    navigation.navigate('ObjectDetection');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Traffic Camera App</Text>

      <TouchableOpacity onPress={navigateToObjectDetection}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start Object Detection</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});

export default YourApp;

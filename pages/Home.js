import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({ navigation }) => {
  const navigateToObjectDetection = () => {
    navigation.navigate('ObjectDetection'); // Navigate to ObjectDetection page
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
    marginBottom: 20,
  },
  button: {
    width: 260,
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

export default Home;

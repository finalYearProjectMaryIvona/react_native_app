import React from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
//npx react-native run-android
const YourApp = () => {
  const onPressButton = () => {
    Alert.alert('You tapped the button!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Traffic Camera App</Text>
      <Text></Text>

      <TouchableOpacity onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Record Traffic</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>View Statistics</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressButton}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Instructions</Text>
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
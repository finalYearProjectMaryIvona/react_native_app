import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeModules } from 'react-native';

const { TFLiteModule } = NativeModules; // TensorFlow Lite native module

// Load the model when the app starts
TFLiteModule.loadModel({
  model: 'model.tflite', // TensorFlow Lite model file in the assets folder
  labels: 'labels.txt',  // (Optional) Labels file in the assets folder
}, (err, res) => {
  if (err) {
    console.error('Error loading model:', err);
  } else {
    console.log('Model loaded successfully:', res);
  }
});

const App = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const runDetection = async () => {
    const imagePath = 'car1.jpg'; // Image file in the assets folder
    try {
      const output = await TFLiteModule.runModelOnImage(imagePath); // Run the model on the image
      setResult(output); // Set the result
    } catch (err) {
      setError(err.message || 'Error running model');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Object Detection</Text>

      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultHeader}>Detection Results:</Text>
          <Text style={styles.resultText}>{JSON.stringify(result, null, 2)}</Text>
        </View>
      )}

      {error && <Text style={styles.error}>Error: {error}</Text>}

      <TouchableOpacity onPress={runDetection} style={styles.button}>
        <Text style={styles.buttonText}>Run Detection</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: 200,
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  resultHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 16,
    marginTop: 10,
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
});

export default App;

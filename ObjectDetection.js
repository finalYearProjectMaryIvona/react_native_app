import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import ml from '@react-native-firebase/ml';

const ObjectDetection = () => {
    const [hasPermission, setHasPermission] = useState(false);
    const [objects, setObjects] = useState([]);
    const devices = useCameraDevices();
    const device = devices.back;

    useEffect(() => {
        (async () => {
            const status = await Camera.requestCameraPermission();
            setHasPermission(status === 'authorized');
        })();
    }, []);

    const processImage = async (imagePath) => {
        const results = await ml().cloudImageLabelerProcessImage(imagePath);
        setObjects(results);
    };

    if (!hasPermission) {
        return <Text>No camera permission</Text>;
    }

    if (!device) {
        return <Text>No camera device found</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={true}
                photo={true}
                onPhotoTaken={(photo) => processImage(photo.path)}
            />
            <View style={styles.overlay}>
                <Text style={styles.text}>Detected Objects:</Text>
                {objects.map((object, index) => (
                    <Text key={index} style={styles.text}>
                        {object.text} ({object.confidence.toFixed(2)})
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    overlay: {
        position: 'absolute',
        bottom: 20,
        alignSelf: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 10,
    },
    text: {
        color: 'white',
    },
});

export default ObjectDetection;

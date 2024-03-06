import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function Screen(props) {
    return (
        <View style={styles.container}>
            <Button title="Select Image" onPress={() => console.log('Button tapped')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Screen;
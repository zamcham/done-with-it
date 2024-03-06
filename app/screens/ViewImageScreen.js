import React from 'react';
import {
    Image,
    StyleSheet,
    View
} from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeButton}></View>
            <View style={styles.deleteButton}></View>
            <Image
                resizeMode='contain'
                style={styles.image}
                source={require('../assets/demo3.jpeg')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    closeButton: {
        width: 50,
        height: 50,
        backgroundColor: '#fc5c65',
        position: 'absolute',
        top: 40,
        left: 30,
    },
    deleteButton: {
        width: 50,
        height: 50,
        backgroundColor: '#4ecdc4',
        position: 'absolute',
        top: 40,
        right: 30,

    },
    image: {
        width: '100%',
        height: '100%',
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
})

export default ViewImageScreen;
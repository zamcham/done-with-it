import React from 'react';
import {
    Image,
    Text,
    ImageBackground,
    StyleSheet,
    View
} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-blue.png')} />
                <Text style={styles.text}>Test</Text>
            </View>

            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    logo: {
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30,
    }
})

export default WelcomeScreen;
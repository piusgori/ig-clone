import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/login-screen/LoginForm';

const instagramLogo = 'https://i.pinimg.com/originals/2c/26/20/2c262006d4020341cf101a9ba9d7b943.jpg';

const LoginScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={{uri: instagramLogo}}></Image>
        </View>
        <LoginForm navigation={navigation}></LoginForm>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,
        backgroundColor: 'white',
    },
})
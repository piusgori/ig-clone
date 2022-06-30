import { View, Text, TextInput, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native'
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Validator from 'email-validator';

const LoginForm = ({ navigation }) => {
    const LoginFormSchema = Yup.object().shape({ email: Yup.string().email().required('An email is required'), password: Yup.string().required().min(6, 'Your passwordhas to have at least 8 characters') });
    const proceedToSignUpHandler = () => {
        navigation.push('SignupScreen');
    }

  return (
    <View style={styles.wrapper}>
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
                console.log(values);
            }}
            validationSchema={LoginFormSchema}
            validateOnMount={true}
        >
            {({ handleChange, handleBlur, handleSubmit, values, isValid }) => {
                return (
                    <>
                        <View style={[styles.inputField, styles.emailInvalid(values, 'email')]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Phone number, username or email'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            ></TextInput>
                        </View>
                        <View style={[styles.inputField, styles.passwordInvalid(values)]}>
                            <TextInput
                                placeholderTextColor='#444'
                                placeholder='Password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            ></TextInput>
                        </View>
                        <View style={{alignItems: 'flex-end', marginBottom: 30}}>
                            <Text style={{color: '#6BB0F5'}}>Forgot Password</Text>
                        </View>
                    <Pressable disabled={!isValid} onPress={handleSubmit} style={({ pressed }) => [styles.button(isValid), pressed && styles.pressed]}>
                        <Text style={styles.buttonText}>Log In</Text>
                    </Pressable>
                    <View style={styles.signupContainer}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity onPress={proceedToSignUpHandler}>
                            <Text style={{color:'#6BB0F5'}}> Sign up</Text>
                        </TouchableOpacity>
                    </View>   
                </>
                )
            }}
        </Formik>
    </View>
  )
}

export default LoginForm;

const styles = StyleSheet.create({
    button: (isValid) => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4
    }),
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    emailInvalid: (values) => ({
        borderColor: values.email.length < 1 || Validator.validate(values.email) ? "#CCC" : 'red',
    }),
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#CCC'
    },
    passwordInvalid: (values) => ({
        borderColor: 1 > values.password.length || values.password.length >= 6 ? "#CCC" : 'red',
    }),
    pressed: {
        opacity: 0.7
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50
    },
    wrapper: {
        marginTop: 80,
    }
})
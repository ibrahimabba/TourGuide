import React, { useCallback, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, KeyboardAvoidingView } from 'react-native'
import { Card } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { signUp, loginUser } from '../store/actions/authActions'


const Authenticate = ({ navigation }) => {
    const [title, setTitle] = useState('')
    const [isSignUp, setIsSignUp] = useState(false)
    const [isValid, setIsValid] = useState(false)

    const dispatch = useDispatch()

    const authHandler = props => {
        let action;
        if (isSignUp) {
            action = dispatch(signUp(email, password))
        } else {
            action = dispatch(loginUser(email, password))
        }
    }


    const handleInputChange = useCallback((event) => {
        const inputValue = event.target.value
        if (inputValue.trim().length === 0) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
        setTitle(inputValue)
    })

    return (
        <KeyboardAvoidingView
            behavior='padding'
            keyboardVerticalOffset={50}
            style={styles.content}>
            <Card style={styles.authContainer}>
                <ScrollView>
                    <TextInput
                        style={styles.input}
                        id="email"
                        placeholder="E-Mail"
                        keyboardType="email-address"
                        value={title}
                        required
                        email
                        autoCapitalize="none"
                        errorText="Please enter a valid email address."
                        onInputChange={handleInputChange}
                        initialValue=""
                    />
                    {/* {!formState.formIsValid && formState.touched && (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>Please enter a valid email address</Text>
                        </View>
                    )} */}

                    {!isValid && 
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>Please enter a valid email address</Text>
                        </View>
                        }
                    <TextInput
                        style={styles.input}
                        id="password"
                        placeholder="Password"
                        keyboardType="default"
                        value={title}
                        secureTextEntry
                        required
                        minLength={5}
                        autoCapitalize="none"
                        errorText="Please enter a valid password."
                        onInputChange={handleInputChange}
                        initialValue=""
                        visible-password
                    />
                    <View style={styles.buttonContainer}>
                        <Button
                            title={isSignUp ? 'Sign Up' : 'Login'}
                            color='#C2185B'
                            onPress={authHandler}
                        />
                    </View>
                    <View style={styles.text}><Text style={{ color: 'red', marginTop: 10, fontSize: 15 }}>or</Text></View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title={`Switch to ${isSignUp ? 'Login' : 'Sign Up'}`}
                            color='#FFC107'
                            onPress={() => {
                                setIsSignUp(prevState => !prevState)
                            }}
                        />
                    </View>
                </ScrollView>
            </Card>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    authContainer: {
        width: '80%',
        maxWidth: 400,
        height: 300,
        maxHeight: 400,
        padding: 20
    },
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        color: 'red',
        fontSize: 13
    },
    buttonContainer: {
        marginTop: 25
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})

export default Authenticate
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const UserProfile = () => {
    return (
        <View  style={styles.user}>
            <Text>User DashBoard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    user: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default UserProfile
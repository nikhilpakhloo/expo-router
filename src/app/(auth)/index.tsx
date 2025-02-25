import { View, Text, Button, StatusBar } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function Welcome() {
    return (
        <View>
            <Text>Welcome</Text>
            <Button title='Sign In' onPress={() => { router.navigate("/(auth)/signin") }} />
            <Button title='Sign Up' onPress={() => { router.navigate("/(auth)/signup") }} />
        </View>
    )
}
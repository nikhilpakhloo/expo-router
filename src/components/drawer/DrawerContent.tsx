import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import type { DrawerContentComponentProps } from '@react-navigation/drawer'
import { router } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
import { useUser } from '@clerk/clerk-expo'


export default function DrawerContent(props: DrawerContentComponentProps) {
    const { signOut } = useAuth();
    const { user } = useUser()

    const goToSaved = () => {
        props.navigation.closeDrawer();
        router.navigate("/saved")
    }
    const handleSignOut = () => {
        signOut();
        router.replace("/(auth)");
    };
    return (
        <DrawerContentScrollView style={styles.scrollContainer}>
            <View style={styles.header}>
                <Image style={styles.image} source={{ uri: user?.imageUrl }} />

            </View>

            <View style={styles.topCol}>
                <Text onPress={goToSaved}>Saved</Text>
            </View>
            <View style={styles.botCol}>
                <Text onPress={handleSignOut}>SignOut</Text>
            </View>

        </DrawerContentScrollView>
    )
}
const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    topCol: {
        marginTop: 15
    },
    botCol: {
        marginTop: 15
    }
})
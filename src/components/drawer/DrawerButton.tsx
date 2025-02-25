import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { DrawerActions } from '@react-navigation/native';
import { useUser } from "@clerk/clerk-expo";

export default function DrawerButton() {
  const navigation = useNavigation();
  const {user} = useUser();
  return (
    <Pressable style={styles.button} onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
      <Image resizeMode='contain' style={{ width: 40, height: 40, borderRadius: 50 }} source={{ uri: user?.imageUrl }} />
    </Pressable>
  )
}
const styles = StyleSheet.create({
  button: {
    padding: 10
  }
})
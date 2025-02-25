import { Pressable } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { router } from 'expo-router'

export default function BackButton({ handlePress }: any) {
  const onPressHandler = () => {
    if (handlePress) {
      handlePress();
    } else {
      router.back(); 
    }
  }

  return (
    <Pressable onPress={onPressHandler}>
      <FontAwesome size={28} name="arrow-left" color="#000" />
    </Pressable>
  )
}

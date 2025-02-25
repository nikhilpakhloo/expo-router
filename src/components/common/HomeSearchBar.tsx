import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '@/src/utils/PlatformUtils'

export default function HomeSearchBar() {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Search' style={styles.input} />
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
     


    },
    input: {
        width: SCREEN_WIDTH * 0.8,
        height: 32,
        margin: 12,
        padding: 8,
        backgroundColor:"white",
        elevation:24,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: { width: 1, height: 1 },
        borderRadius: 5,
      },
})
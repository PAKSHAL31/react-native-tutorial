import React, { Component } from 'react'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'

function App():JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  }
})

export default App;

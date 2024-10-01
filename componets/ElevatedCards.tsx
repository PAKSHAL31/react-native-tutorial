import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.textStyle}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>moree...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>😊</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    container:{
        padding:8,

    },
    card:{
        width:100,
        height:100,
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        margin:5,
        borderRadius:4, 
    },
    cardElevated:{
        backgroundColor:'#cad5e2',
        elevation:4,
        shadowOffset: {
            width:2,
            height:2
        },
        shadowColor:'#EF5354'
    },

})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.textStyle}>FlatCards</Text>
      <View style = {styles.container}>
        <View style= {[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style= {[styles.card, styles.cardTwo]}>
            <Text>Green</Text>
        </View>
        <View style= {[styles.card, styles.cardThree]}>
            <Text>BLue</Text>
        </View>
        <View style= {[styles.card, styles.cardThree]}>
            <Text>BLue</Text>
        </View>
        
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    container:{
       // borderColor: '#000000',
        //borderWidth: 1,
        flex:1,
        flexDirection: 'row',
        padding:8,
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        height:100,
        width:100,
        margin:8,
    },
    cardOne:{
        backgroundColor: 'red',
    },
    cardTwo:{
        backgroundColor: 'green',
    },
    cardThree:{
        backgroundColor:'blue',
    }
})
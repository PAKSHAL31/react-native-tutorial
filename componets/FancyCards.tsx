import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import CardTitle from 'react-native-paper/lib/typescript/components/Card/CardTitle'

export default function FancyCards() {
  return (
    <View>
     <Text style={styles.textStyle}>FancyCards</Text>
     <View style = {[styles.card, styles.elevated]}>
        <Image  source={
            {
                uri: 'https://images.pexels.com/photos/28039616/pexels-photo-28039616/free-photo-of-a-bowl-of-tomatoes-on-a-table.jpeg'            
            }}
            style = {styles.cardImage}
        />
        <View>
            <Text style={styles.cardTitle}>Lorem, ipsum.</Text>
            <Text style={styles.cardLabel}>Lorem, ipsum dolor.</Text>
            <Text style={styles.cardDescripiton}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui natus obcaecati ullam deserunt vitae veritatis sequi voluptatum aliquam ratione mollitia sit ipsa, esse ex!</Text>
            <Text style={styles.cardFooter}>Lorem ipsum dolor sit amet.</Text>
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
    card:{
        marginHorizontal: 8,
        height: 360,
        borderRadius: 8
    },
    elevated:{
        backgroundColor: '#000000',
        
    },
    cardImage:{
        height: 180,
        borderTopLeftRadius:8,
        borderTopRightRadius:8
    },
    cardTitle:{
        color: '#ffffff',
        marginHorizontal: 5,
    },
    cardLabel:{
        color: '#ffffff',
        marginHorizontal: 5,
    },
    cardDescripiton:{
        color: '#ffffff',
        marginHorizontal: 5,
    },
    cardFooter:{
        color: '#ffffff',
        marginHorizontal: 5,
    }
    
})
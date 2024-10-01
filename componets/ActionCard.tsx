import { StyleSheet, Text, View, Linking ,Image ,TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink : string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style = {[styles.card, styles.elevated]}>
        <View style = {styles.headingContanier}>
            <Text style={styles.cardText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, non?
            </Text>
        </View>
        <Image 
            source={{
                uri:'https://cdn.hashnode.com/res/hashnode/image/upload/v1727705054212/702912b1-8cda-452b-93ea-2f3ba4472672.png'
            }}
            style = {styles.cardImage}
        />
        <View style={styles.footer}>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae accusamus accusantium iste debitis doloremque beatae et cum unde nihil quas, aut quibusdam autem voluptatum error enim possimus modi, quos minus.
            </Text>
            <TouchableOpacity
                onPress={()=> openWebsite('https://abhicode.com/react-native-core-concepts-understanding-components-jsx-and-state')}
            >
                <Text>Read More</Text>
            </TouchableOpacity>
      </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {

    },
    card:{
        height: 350,
        marginHorizontal: 8,
        borderRadius: 8,
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom: 10,
        padding:10
    },
    elevated:{

    },
    headingContanier:{

    },
    cardText:{

    },
    cardImage:{
        height: 180,
        marginBottom: 10
    },
    footer:{

    }
})
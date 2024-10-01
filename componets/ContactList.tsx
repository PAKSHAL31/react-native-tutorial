import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            "id": 1,
            "name": "Elma Herring",
            "email": "elmaherring@unq.com",
            "phone": "+1 (913) 497-2020"
          },
          {
            "id": 2,
            "name": "Knapp Berry",
            "email": "knappberry@unq.com",
            "phone": "+1 (951) 472-2967"
          },
          {
            "id": 3,
            "name": "Bell Burgess",
            "email": "bellburgess@unq.com",
            "phone": "+1 (887) 478-2693"
          },
          {
            "id": 4,
            "name": "Hobbs Ferrell",
            "email": "hobbsferrell@unq.com",
            "phone": "+1 (862) 581-3022"
          },
          {
            "id": 5,
            "name": "Marylou Medina",
            "email": "maryloumedina@unq.com",
            "phone": "+1 (996) 520-2967"
          },
          {
            "id": 6,
            "name": "Larson Guerra",
            "email": "larsonguerra@unq.com",
            "phone": "+1 (972) 566-2684"
          },
          {
            "id": 7,
            "name": "Shelby Ballard",
            "email": "shelbyballard@unq.com",
            "phone": "+1 (824) 467-3579"
          },
          {
            "id": 8,
            "name": "Lea Faulkner",
            "email": "leafaulkner@unq.com",
            "phone": "+1 (899) 528-3402"
          },
          {
            "id": 9,
            "name": "Cecelia Wolf",
            "email": "ceceliawolf@unq.com",
            "phone": "+1 (862) 507-3140"
          },
          {
            "id": 10,
            "name": "Melva Nixon",
            "email": "melvanixon@unq.com",
            "phone": "+1 (901) 444-3081"
          }];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map((contact) => (
            <View key={contact.id} style={styles.usercard}>
                <Text>{contact.email}</Text>
                <Text>{contact.name}</Text>
                <Text>{contact.phone}</Text>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{

    },
    container:{

    },
    usercard:{
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 5,
        marginHorizontal: 10,
        padding: 2
    }
})
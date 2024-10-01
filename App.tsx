import { View, Text,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'
import FlatCards from './componets/FlatCards'
import ElevatedCards from './componets/ElevatedCards'
import FancyCards from './componets/FancyCards'
import ActionCard from './componets/ActionCard'
import ContactList from './componets/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
      <FlatCards />
      <ElevatedCards />
      <FancyCards />
      <ActionCard />
      <ContactList/>
      </ScrollView>
      
    </SafeAreaView>
  )
}

export default App
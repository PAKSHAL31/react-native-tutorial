import { View, Text,SafeAreaView,ScrollView  } from 'react-native'
import React from 'react'
import FlatCards from './componets/FlatCards'
import ElevatedCards from './componets/ElevatedCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>
      <FlatCards />
      <ElevatedCards />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
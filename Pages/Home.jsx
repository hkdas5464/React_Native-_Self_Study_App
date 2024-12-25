import React from 'react'
import { View,Button,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {

    const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('History')}
      />
    </View>
  )
}

export default Home
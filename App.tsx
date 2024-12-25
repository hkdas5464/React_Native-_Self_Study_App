import React, { useEffect, useState } from 'react';
import { View, Text, DrawerLayoutAndroid, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Appbar, Divider, Icon } from 'react-native-paper';
import DrawerContent from './Drawer/Drawer';
import ArithmaticMathVideo from './Pages/Maths/Data/ArithmaticData';
import Test from './Pages/GK_GS/All_In_One';
import ResoningVideo from './Pages/Resoning/Data/Resoning';
import BiologyVideo from './Data/Biology';
import Physics from './Data/Physics';
import MapVideo from './Data/Map';
import HistoryVideo from './Data/History';
import axios from 'axios';
import AllPdf from './Pages/GK_GS/Allpdf';



const politybymadhukarsir="https://my-json-server.typicode.com/hkdas5464/tte/polity";


function App() {

  const [data, setData] = useState([]);
  const Stack = createNativeStackNavigator();
  const drawer = React.useRef(null);
  const [drawerPosition, setDrawerPosition] = React.useState('left');
  const [date,setDate] = useState(Date);

  
  useEffect(()=>{
    axios
    .get("https://my-json-server.typicode.com/hkdas5464/tte/polity",
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
    .then((resopnse)=>{
        setData(resopnse.data)
    })

},[])



  const navigationView = () => (
    <View>
      <Appbar.Header style={{ backgroundColor: "#2596be" }}>
        <Appbar.Content title="All Subjects" />
        <Divider />
      </Appbar.Header>
      <DrawerContent />
    </View>
  );

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition={drawerPosition}
          renderNavigationView={navigationView}>
          <Appbar.Header style={{ backgroundColor: "#2596be" }}>
            <Appbar.Action icon="menu" onPress={() => drawer.current?.openDrawer()} />
            <Appbar.Content title="Study Video App" onPress={() => drawer.current?.openDrawer()} />
          </Appbar.Header>

          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Polity">
            {/* <Stack.Screen name="History" component={History} /> */}
            {/* <Stack.Screen name='Biology' component={Biology}/> */}
            {/* <Stack.Screen name='Resoning' component={Resoning}/> */}

            <Stack.Screen name='Resoning'>
              {props => <Test {...props} ClassData={ResoningVideo} id="N_5u5uw---I" name="Alphabet series part 1" />}
            </Stack.Screen>

            {/* HISTORY */}
            <Stack.Screen name='History'>
              {props => <Test {...props} ClassData={HistoryVideo} id="-NqyELZefXA" name="History Class 01" />}
            </Stack.Screen>
            {/* PHYSICS */}
            <Stack.Screen name='Physics'>
              {props => <Test {...props} ClassData={Physics} id="0JVvoDCJfdM" name="Physics Introduction Class"/>}
            </Stack.Screen>
            {/* BIOLOGY */}
            <Stack.Screen name='Biology'>
              {props => <Test {...props} ClassData={BiologyVideo} name="Biology Class 01" id="OfNCiAuCy3s" />}
            </Stack.Screen>
            {/* CHEMISTRY */}
            <Stack.Screen name='Chemistry'>
              {props => <Test {...props} ClassData={Physics} id="0JVvoDCJfdM" name="Physics Introduction Class" />}
            </Stack.Screen>
            {/* MAP */}
            <Stack.Screen name='Map'>
              {props => <Test {...props} ClassData={MapVideo} id="e8zEB7ku7Nw" name="World Map Introduction Class || By Khan Sir" />}
            </Stack.Screen>

            {/* ARITHMETIC */}

            {/* <Stack.Screen name='Arithmetic'>
              {props => <Test {...props} ClassData={ArithmaticMathVideo} id="FKJvdIIyaVo" name="Class  01  Percentage"/>}
            </Stack.Screen> */}
            <Stack.Screen name='Arithmetics'>
              {props => <Test {...props} ClassData={ArithmaticMathVideo} id="FKJvdIIyaVo" name="Class  01  Percentage"/>}
            </Stack.Screen>

            <Stack.Screen name='Arithmetic'>
              {props => <Test {...props} ClassData={ArithmaticMathVideo} id="FKJvdIIyaVo" name="Class  01  Percentage"/>}
            </Stack.Screen>

            {/* ADVANCE */}

            <Stack.Screen name='Advance'>
              {props => <Test {...props} ClassData={ArithmaticMathVideo} id="G5GB6zhKm7s"  name="Coming Soon !!"/>}
            </Stack.Screen>

            <Stack.Screen name='miscellaneous'>
              {props => <Test {...props} ClassData={ResoningVideo} id="N_5u5uw---I" name="Alphabet series part 1" />}
            </Stack.Screen>

            {/* Polity by madhujar sir */}

            <Stack.Screen name='Polity'>
              {props => <Test {...props} ClassData={data} id="AzCvTtQsGyU" name="Polity Foundation Course : Part-1" />}
            </Stack.Screen>

            <Stack.Screen name='RRB-JE'>
              {props => <AllPdf {...props} ClassData={data} id="https://drive.usercontent.google.com/download?id=1gRww3s2Ld5jyWKRUW0Rx92B8VIApgRp6&export=download&authuser=6&confirm=t&uuid=f09e433a-bff2-44c3-810a-1721b5c6239b&at=APvzH3oEZkA3kN78VDk3ZiKLFpQH:1735122222580" name="Polity Foundation Course : Part-1" />}
            </Stack.Screen>

            <Stack.Screen name='Static-GK'>
              {props => <AllPdf {...props} ClassData={data} id="https://drive.usercontent.google.com/download?id=1FX1phWHY0glHSiTOaFeqMJMq0T74x1nc&export=download&authuser=6&confirm=t&uuid=2233eca1-bc40-4be9-bdd7-a33254acbb96&at=APvzH3rZK7baLlyWc8ld6FQaOdAV:1735121345608" name="Polity Foundation Course : Part-1" />}
            </Stack.Screen>

            <Stack.Screen name='BLACKBOOK'>
              {props => <AllPdf {...props} ClassData={data} id="https://drive.usercontent.google.com/download?id=1Q5zRC3sDdk2owgHXZGo9yYZ86B0pjh-l&export=download&authuser=6&confirm=t&uuid=e134d750-f764-4a7e-97ed-976e377be7e7&at=APvzH3oA-4LfJRb9AsZvAtxIrUz6:1735122554796" name="Polity Foundation Course : Part-1" />}
            </Stack.Screen>

            <Stack.Screen name='Vocab'>
              {props => <AllPdf {...props} ClassData={data} id="https://drive.usercontent.google.com/download?id=1UCGwyJ21_7CG5zR9mkfMtEKnR8e0rqZO&export=download&authuser=6&confirm=t&uuid=cb50dd5b-2edb-4878-89cb-5366d8d660e1&at=APvzH3rIiyTeSyb31G_7EXpuscUE:1735122761340" name="Polity Foundation Course : Part-1" />}
            </Stack.Screen>

            <Stack.Screen name='CHSL_2021'>
              {props => <AllPdf {...props} ClassData={data} id="https://drive.usercontent.google.com/download?id=15Hlz1WIu7unO1MGiVCthP_QkM99CUwB6&export=download&authuser=6&confirm=t&uuid=ec371579-3dd2-4a7a-a5bd-643d0e08a0fa&at=APvzH3rY9RBOrNDjgmnv8QDev3xU:1735122869437" name="Polity Foundation Course : Part-1" />}
            </Stack.Screen>

            





            {/* <Stack.Screen name='Arithmatic' component={Arithmatic} /> */}
            {/* <Stack.Screen name='Map' component={MapClass}/> */}
            {/* <Stack.Screen name='Physics' component={PhysicsClass}/> */}
          </Stack.Navigator>

        </DrawerLayoutAndroid>
      </SafeAreaProvider>

    </NavigationContainer>
  )
}


const styles = StyleSheet.create({

  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});


export default App
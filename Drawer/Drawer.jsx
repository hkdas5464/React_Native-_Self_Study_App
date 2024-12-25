import * as React from 'react';
import {View,Dimensions} from 'react-native';
import { Divider, Drawer, Icon, Text } from 'react-native-paper';
import { Card } from 'react-native-paper';

import ExpandCollaps from './Expand/ExpandCollaps';
import { useNavigation } from '@react-navigation/native';
import { List } from 'react-native-paper';
import ExpangCollapsGkGs from './Expand/Expandgkgs';

const DrawerContent = () => {
  const [active, setActive] = React.useState('');

  const navigation = useNavigation();

  return (
    <View>
    <Drawer.Section >
     
        <Drawer.Item
      label={<Text style={{color: 'black', fontSize:16,fontWeight:"100"}}>RESONING</Text>}
        active={active === 'Resoning'}
        onPress={() => navigation.navigate('Resoning') & setActive('Resoning')}
      />
<Card style={{backgroundColor:'white',height:Dimensions.get('window').height}}>
<Card.Content>

      <ExpangCollapsGkGs subject="GK_GS" child1="History" 
      child2="Physics" child3="Biology" child4="Chemistry" child5="Map" />
      
      <ExpandCollaps subject="MATHS" child1="Arithmetic" child2="Advance" onpress="Arithmetic" />
      <ExpandCollaps subject="English" child1="Neetu Singh" child2="Gopal Verma" onpress="Resoning"/>
      
      <ExpangCollapsGkGs subject="Madhukar Sir" child1="Polity" 
      child2="Polity" child3="Polity" child4="Polity" child5="Polity" />
      <ExpangCollapsGkGs subject="All Pdf" child1="Static-GK" 
      child2="RRB-JE" child3="BLACKBOOK" child4="Vocab" child5="CHSL_2021" />
</Card.Content>
</Card>
    </Drawer.Section>
    </View>
  );
};

export default DrawerContent;
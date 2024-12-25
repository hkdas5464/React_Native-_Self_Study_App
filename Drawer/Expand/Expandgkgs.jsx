import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Divider, List } from 'react-native-paper';

const ExpangCollapsGkGs = ({subject,child1,child2,child3,child4,child5,onpress}) => {
  const [expanded, setExpanded] = React.useState(true);

  const navigation = useNavigation()
  return (
    <List.Section >
      <List.Accordion
        title={subject}
        style={{backgroundColor:'white'}}
        left={props => <List.Icon {...props} icon="book" />}>
        <List.Item title={child1} onPress={()=>navigation.navigate(`${child1}`)}  />
        <Divider/>
        <List.Item title={child2} onPress={()=>navigation.navigate(`${child2}`)}/>
        <Divider/>
        <List.Item title={child3} onPress={()=>navigation.navigate(`${child3}`)}  />
        <Divider/>
        <List.Item title={child4} onPress={()=>navigation.navigate(`${child3}`)}/>
        <Divider/>
        <List.Item title={child5} onPress={()=>navigation.navigate(`${child5}`)}  />
      </List.Accordion>

    </List.Section>
  );
};

export default ExpangCollapsGkGs;
import * as React from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';



function Avatarr() {
    return (
      <Avatar.Text label="1"/>
    );
  }
 
const MyComponent = ({title,id}) => (
  <Card.Title
    title={title}
    over
    
    left={(props) => <Avatar.Text {...props} label={id}  style={{ backgroundColor: "#2596be" }} />}
    
  />
);

export default MyComponent;
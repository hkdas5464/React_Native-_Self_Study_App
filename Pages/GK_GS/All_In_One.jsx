import React,{useState,useEffect} from 'react';
import { StyleSheet, View,ScrollView ,Button,Dimensions} from 'react-native';
import YouTube  from 'react-native-youtube-iframe';
import { Divider, Text } from 'react-native-paper';
import Tabs from '../../Cards/Tabs';
import Orientation from 'react-native-orientation-locker';



 
const Test = ({ClassData,id,name}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [play,setPlay] = useState(id);
  const [title,setTitle] = useState(name)

  useEffect(() => {
    const onOrientationChange = (orientation) => {
      if (orientation === 'LANDSCAPE') {
        setIsFullScreen(true);
      } else {
        setIsFullScreen(false);
      }
    };

    Orientation.addOrientationListener(onOrientationChange);

    return () => {
      Orientation.removeOrientationListener(onOrientationChange);
    };
  }, []);

  const onFullScreenChange = (fullScreenStatus) => {
    if (fullScreenStatus) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  };



  

  return (
    <View >
      {/* <View style={styles.container}><Drawer/></View> */}
      
      <YouTube
        videoId={play}
        play={true}
        height={220}
        controls={1}
        initialPlayerParams={{color:'white'}}
        onChangeState={(event) => console.log(event)}
        onChangeQuality={(event) => console.log(event)}
        onError={(e) => console.log(e)}
        onReady={() => console.log('ready')}
        onFullscreenChange={onFullScreenChange}
        webViewStyle={{ flex: 1 }}
        style={isFullScreen ? styles.fullScreen : styles.normalScreen}
      />
      
      <View style={{ alignItems: 'center',backgroundColor:"#2596be",padding:10}}>
      <Text>{title}</Text>
      
    </View>
      
      <ScrollView>
      <View>
        {ClassData.map((e)=>{
          
          return(
            <View key={e.id + Math.random()} >
              <Text key={e.id} onPress={()=>{setPlay(e.url) ,setTitle(e.name)}}><Tabs title={e.name} id={e.id}/>
              </Text>
              <Divider/>
              </View>
          )
        })}
         <View style={{marginBottom:250}}><Text style={{marginBottom:10, padding:15, fontSize:20, backgroundColor:"#2596be", textAlign:"center"}}>✅ Hurray You Have completed!! ✅</Text></View>
       
      </View>
      </ScrollView>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containers: {
    flex: 1,
  },
  normalScreen: {
    aspectRatio: 16 / 9,
  },
  fullScreen: {
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').width,
  },
});

export default Test;
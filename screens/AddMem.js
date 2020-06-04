import React from 'react';
import { StyleSheet, Text, View ,Image,Dimensions , TextInput ,Button, ViewComponent } from 'react-native';
import Word from '../components/Word';



const screenWidth= Math.round(Dimensions.get('window').width);
const screenHeight= Math.round(Dimensions.get('window').height);

export default function AddMem({navigation,route}) {
    const [postText, setPostText] = React.useState('');
    // const courseInFor=route.params.courseInFor
    // console.log(courseInFor)
    function onPress(){

      return navigation.navigate('WordDetail', { post:{mems: [...postText]} });
      return navigation.navigate('WordDetail', { post:postText });
    }
  return (
    <View style={styles.container}>
        <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"    
        onPress={onPress}
      />

    </View>
    )
}



//styled componet
const styles = StyleSheet.create({
  container: {
    width :'100%',
    flex: 1,
    // backgroundColor:'#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop :50 
  }
  
});


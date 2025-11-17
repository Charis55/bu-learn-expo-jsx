
import React from 'react';
import { ScrollView, Text, Button } from 'react-native';

export default function Dashboard({navigation}){
  return(
    <ScrollView>
      <Text>Dashboard</Text>

      <Button title="Go to Quiz" onPress={()=>navigation.navigate('Quiz')} />
      <Button title="Go to Story" onPress={()=>navigation.navigate('Story')} />
      <Button title="Go to Audio" onPress={()=>navigation.navigate('Audio')} />
      <Button title="Go to Conversion Result" onPress={()=>navigation.navigate('ConversionResult')} />

      <Button title="Go to Play With Friends" onPress={()=>navigation.navigate('PlayWithFriends')} />
      <Button title="Go to Challenges" onPress={()=>navigation.navigate('Challenges')} />

      <Button title="Go to Settings" onPress={()=>navigation.navigate('Settings')} />
    </ScrollView>
  );
}

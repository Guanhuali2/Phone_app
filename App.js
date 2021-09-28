import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './component/Profile.js'
import repositories from './component/Repository.js'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/*
Home page view
*/
function HomeScreen() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();
/*
Nav bar
*/
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Profile} />
        <Tab.Screen name="Res" component={repositories} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

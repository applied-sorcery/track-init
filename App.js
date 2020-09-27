/*to-do:
 -add color corresponding to 
 -add navigation drawer
 -add list to combat screen
 -stick a button to the bottom of the "my mobs" list
 -make the "my mobs" list take up 100% of the screen
*/

// import uuid from 'react-native-uuid';
// import ListItem from './components/ListItem.js';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import SearchView from './components/SearchView.js';
import HomeView from './components/HomeView.js';
import MonsterStatsView from './components/MonsterStatsView.js';
import CombatView from './components/CombatView.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Search" component={SearchView} />
        <Stack.Screen name="Info" component={MonsterStatsView} />
        <Stack.Screen name="Combat" component={CombatView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

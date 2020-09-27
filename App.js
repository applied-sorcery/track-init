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
import SettingsView from './components/SettingsView.js'
import MonsterStatsView from './components/MonsterStatsView.js';
import CombatView from './components/CombatView.js';
import {bottomTabNavigator} from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Settings" component={SettingsView} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    
  );
};

export default App;

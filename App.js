/*to-do:
 -add color corresponding to alignment
*/

// import uuid from 'react-native-uuid';
// import ListItem from './components/ListItem.js';
// import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header.js';
import SearchNBuild from './components/SearchNBuild.js';
import HomeScreen from './components/HomeScreen.js';
import MonsterInfo from './components/MonsterInfo.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchNBuild} />
        <Stack.Screen name="Info" component={MonsterInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f363c',
    flex: 1,
  },
  searchView: {
    paddingRight: 15,
    flexDirection: 'row',
    backgroundColor: '#251c1c',
    borderBottomWidth: 4,
    borderBottomColor: '#3d2e2e',
    height: 64,
    alignItems: 'center',
    borderRadius: 40,
  },
  searchTextInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 22,
    padding: 10,
    color: 'white',
  },

  monsterListHeader: {
    flexDirection: 'row',
    marginTop: 40,
  },

  searchResultsList: {},

  monsterList: {
    backgroundColor: '#fff',
  },

  MonsterListView: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

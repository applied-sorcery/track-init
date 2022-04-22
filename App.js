/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

/** 
I) home screen

button: navigate to "groups screen" 

button: navigate to "create combat screen"


II) groups screen:
 -- contains all groups of combatants which were previously saved
 
 --each of these groups will have a button on them to quickstart a combat with just that group,
 useful for when your campaign stopped & started again in the middle of battle\

 --groups can contain groups, for example you could have a group called "Battle at East
 Village Graveyard" which contains groups called "Goblins 1" and "Goblins 2"


 III) new combat screen:

 */

const CombatScreen = ({navigation, route}) => {
  //set screen state to CombatScreen
  return (
    <View>
      <Text>Combat Screen</Text>
      {route.params.isNew ? <Text>combat is new</Text> : null}
    </View>
  );
};
const CombatantsScreen = () => {
  //set screen state to CombatantsScreen
  return (
    <View>
      <Text>Combatant Screen</Text>
    </View>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <View>
        <Button
          title="New"
          onPress={() => navigation.navigate('Combat', {isNew: true})}>
          Create New Combat
        </Button>
        <Button title="Combat" onPress={() => navigation.navigate('Combat')}>
          Saved Combats
        </Button>
        <Button
          title="Combatants"
          onPress={() => navigation.navigate('Combatants')}></Button>
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Combatants" component={CombatantsScreen} />
        <Stack.Screen name="Combat" component={CombatScreen} />
        {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

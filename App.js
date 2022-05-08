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

import {SvgUri} from 'react-native-svg';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  FlatList,
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

import DeleteIcon from './delete.svg';

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

// const myCombatantsList = () => {
//   return (

//   );
// };

const CombatScreen = ({navigation, route}) => {
  const data = [
    {id: 1, title: 'Black', description: ''},
    {id: 2, title: 'Black', description: ''},
    {id: 3, title: 'gold', description: ''},
    {id: 4, title: 'yellow', description: ''},
    {id: 5, title: 'turqouse', description: ''},
  ];
  const Item = ({title, description}) => (
    <View>
      <Text>{title} </Text>
      <Text>{description} </Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item title={item.title} description={item.description} />
  );
  return (
    <View>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
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
      <DeleteIcon style={styles.iconSVG} />
      <View style={styles.buttonView}>
        <Button
          title="New"
          onPress={() => navigation.navigate('Combat', {isNew: true})}></Button>
        <Button
          title="Combat"
          onPress={() =>
            navigation.navigate('Combat', {isNew: false})
          }></Button>
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

const styles = StyleSheet.create({
  buttonView: {},
  button: {},
  textInput: {},
  iconSVG: {width: 100, height: 100, borderWidth: 2},
  container: {},
});

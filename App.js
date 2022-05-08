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
  TouchableOpacity,
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
import {TextInput} from 'react-native-gesture-handler';

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
  const [data, setData] = useState([
    {id: 1, title: 'Black', description: ''},
    {id: 2, title: 'Black', description: ''},
    {id: 3, title: 'gold', description: ''},
    {id: 4, title: 'yellow', description: ''},
    {id: 5, title: 'turqouse', description: ''},
  ]);
  const [newCharName, setNewCharName] = useState('');
  const onChangeText = text => {
    setNewCharName(text);
  };
  const onAddListItem = () => {
    setData([
      ...data,
      {title: newCharName + '', id: data.length + 3, description: ''},
    ]);
  };

  const Item = ({title, description}) => (
    <View>
      <View style={styles.itemView}>
        <Text style={styles.titleText}>{title} </Text>
        <DeleteIcon style={styles.iconSVG} />
      </View>

      <Text>{description} </Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item title={item.title} description={item.description} />
  );
  return (
    <View>
      <View style={styles.textInputView}>
        <TextInput
          onSubmitEditing={() => onSubmitEditing()}
          onChangeText={text => onChangeText(text)}
          placeholder={'Name'}
        />
        <TouchableOpacity
          onPress={() => onAddListItem()}
          style={[styles.button, styles.addBtn]}>
          <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textInputView}>
        <TouchableOpacity
          onPress={() => startCombat()}
          style={[styles.button, styles.combatBtn]}>
          <Text style={styles.btnText}>Start Combat</Text>
        </TouchableOpacity>
      </View>

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
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Combat', {isNew: true})}>
          <Text style={styles.btnText}>New</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Combat', {isNew: false})}>
          <Text style={styles.btnText}>Combat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Combatants')}>
          <Text style={styles.btnText}>Combatants</Text>
        </TouchableOpacity>
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
  titleText: {marginLeft: 60},
  combatBtn: {height: 30, margin: 10, padding: 2},
  addBtn: {margin: 5, height: 30, padding: 0, width: 75},
  buttonView: {display: 'flex', marginTop: 25},
  btnText: {fontSize: 20, fontWeight: 'bold'},
  button: {
    alignItems: 'center',
    marginLeft: 20,
    padding: 10,
    margin: 50,
    width: 150,
    backgroundColor: '#3ef77e',
    borderRadius: 3,
  },
  itemView: {flexDirection: 'row', justifyContent: 'space-between'},
  textInput: {width: 100},
  iconSVG: {width: 20, height: 20, marginRight: 10},
  container: {},
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingRight: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

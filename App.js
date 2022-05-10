/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//logic:

// start btn greyed if less than 2 combatants
// edit btn greyed if less than 1 combatant
// save btn greyed unless 2 combatants:
//   save state:
//    -combat status: in combat, paused, pre-combat, post-combat
//    -combatants (+any stats)
//    -round #
//    -initiative info

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
    {id: 2, title: 'Blue', description: ''},
    {id: 3, title: 'Gold', description: ''},
    {id: 4, title: 'Yellow', description: ''},
    {id: 5, title: 'Turqouse', description: ''},
  ]);
  const [combatState, setCombatState] = useState();
  const [editState, setEditState] = useState();

  const [newCharName, setNewCharName] = useState('');
  const onChangeText = text => {
    setNewCharName(text);
  };
  const onAddListItem = () => {
    setData([
      ...data,
      {title: newCharName + '', id: data.length + 7, description: ''},
    ]);
  };

  const onEditCombat = () => {
    editState == 'editing' ? setEditState('noedit') : setEditState('editing');
  };

  const onRemove = (id, e) => {
    // data.map((el, index) =>
    //   alert('name: ' + el.title + '  | index: ' + index + ' :: el: ' + el.id),
    // );
    setData(data.filter(item => item.id !== id));
  };

  const onStartCombat = () => {
    // data.map((el, index) =>
    //   alert('name: ' + el.title + '  | index: ' + index + ' :: el: ' + el.id),
    // );
    setCombatState('in combat');
  };

  const onReset = () => {
    setData([
      {id: 1, title: 'Black', description: ''},
      {id: 2, title: 'Blue', description: ''},
      {id: 3, title: 'Gold', description: ''},
      {id: 4, title: 'Yellow', description: ''},
      {id: 5, title: 'Turqouse', description: ''},
    ]);
  };

  const Item = ({id, title, description, onRemove}) => (
    <View>
      <View style={styles.itemView}>
        <Text style={styles.titleText}>
          {title !== '' ? title : 'dummy fighter'}{' '}
        </Text>
        {editState == 'editing' ? (
          <TouchableOpacity onPress={() => onRemove()}>
            <DeleteIcon style={styles.iconSVG} />
          </TouchableOpacity>
        ) : null}
      </View>

      <Text>{description} </Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      initiative={item.init}
      title={item.title}
      description={item.description}
      id={item.id}
      onRemove={() => onRemove(item.id)}
    />
  );

  const FlatListItemSeparator = () => {
    return <View style={styles.listSeparator} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.combatControls}>
        <TouchableOpacity
          onPress={() => onStartCombat()}
          style={[styles.button, styles.menuBtn]}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onEditCombat()}
          style={[styles.button, styles.menuBtn]}>
          {editState == 'editing' ? (
            <Text style={styles.btnText}>Editing...</Text>
          ) : (
            <Text style={styles.btnText}>Edit</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onSaveCombat()}
          style={[styles.button, styles.menuBtn]}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.menuBtn]}
          onPress={() => onReset()}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.spacer}></View>
      {editState == 'editing' ? (
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            onSubmitEditing={() => onSubmitEditing()}
            onChangeText={text => onChangeText(text)}
            placeholder={'Name'}
          />
          <TouchableOpacity
            onPress={() => onAddListItem()}
            style={[styles.button, styles.menuBtn]}>
            <Text style={styles.btnText}>Quick Add</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onAddListItem()}
            style={[styles.button, styles.menuBtn]}>
            <Text style={styles.btnText}>Add New</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onAddListItem()}
            style={[styles.button, styles.menuBtn]}>
            <Text style={styles.btnText}>Load</Text>
          </TouchableOpacity>
        </View>
      ) : null}
      <View style={styles.spacer}></View>
      <View style={styles.combatListView}>
        {data && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={FlatListItemSeparator}
          />
        )}
      </View>
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
    <View style={styles.container}>
      <View style={styles.buttonView}>
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
  const [combats, setCombats] = useState([]);
  const [combatants, setCombatants] = useState([]);

  const setAnts = ants => {
    setCombatants(ants);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Stack.Screen name="Combatants" component={CombatantsScreen} />
        <Stack.Screen
          name="Combat"
          options={{headerShown: false}}
          component={CombatScreen}
        />
        {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  listSeparator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
  },
  combatListView: {
    flex: 2,
    alignItems: 'stretch',
    borderColor: 'green',
    borderWidth: 4,
  },
  spacer: {flex: 1},
  titleText: {fontSize: 16, fontWeight: 'bold'},
  combatMenu: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
  combatBtn: {height: 30, margin: 10, padding: 2},
  combatControls: {flexDirection: 'row', justifyContent: 'flex-end'},
  menuBtn: {
    flex: 1,
    margin: 5,
    height: 30,
    padding: 0,
    // width: 75,
  },
  buttonView: {
    flex: 1,
    maxHeight: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 2,
    borderColor: 'red',
  },

  btnText: {fontSize: 20, fontWeight: 'bold'},
  button: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    marginLeft: 0,
    padding: 10,
    margin: 0,
    width: 150,
    backgroundColor: '#aaa77e',
    borderRadius: 3,
  },
  itemView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'gold',
    // borderWidth: 2,
  },
  textInput: {flex: 1, margin: 10, backgroundColor: '#bbb'},
  iconSVG: {width: 20, height: 20, marginRight: 10},
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'blue',
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingRight: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

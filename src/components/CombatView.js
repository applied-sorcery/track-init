//to-do:
//  -create a combatListItemView, distinct from listItemView used in SearchView component
//  -create a view to auto-roll initiative or allow user to manually roll and save value
//  -modify styles of course

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import {useSelector} from 'react-redux';
import ListItem from './ListItem.js';

import Styles from '../../Style';

const baseUrl = 'http://dnd5eapi.co';

const CombatView = ({navigation, renderItem}) => {
  //index to keep track of whose turn it is
  const [index, setIndex] = useState();
  const combatants = useSelector((state) => state.combatants);

  return (
    <View style={Styles.container}>
      <Text style={Styles.defaultText}>
        This is your list so far. Push 'Ready' to auto-roll initiative or 'Roll
        Init' to manaully roll and save initiative values.
      </Text>
      <FlatList
        data={combatants}
        renderItem={({item}) => (
          <Text style={Styles.defaultText}>{item.name}</Text>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text style={Styles.defaultText}>{'<no mobs yet>'}</Text>
        )}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

export default CombatView;

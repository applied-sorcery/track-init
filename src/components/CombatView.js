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
  //mock data:
  const [index, setIndex] = useState();
  const combatants = useSelector((state) => state.combatants);

  return (
    <View style={Styles.container}>
      <Text style={Styles.defaultText}>This is the combat view</Text>
      <FlatList
        data={combatants}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>{'<no mobs yet>'}</Text>}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

export default CombatView;

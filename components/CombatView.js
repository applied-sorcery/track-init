import React, {useState, useEffect} from 'react';
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
import ListItem from './ListItem.js';

import Styles from '../Style';

const baseUrl = 'http://dnd5eapi.co';

const CombatView = ({navigation, renderItem, combatants}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.defaultText}>This is the combat view</Text>
      <FlatList
        data={combatants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => <Text>{'<no mobs yet>'}</Text>}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
};

export default CombatView;

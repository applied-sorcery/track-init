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

import Styles from '../Style';

const baseUrl = 'http://dnd5eapi.co';

const CombatView = ({navigation}) => {
  const [monsters, setMonsters] = useState([]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.defaultText}>This is the combat view</Text>
    </View>
  );
};

export default CombatView;

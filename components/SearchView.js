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
import uuid from 'react-native-uuid';
import ListItem from './ListItem.js';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Styles from '../Style.js';

const baseUrl = 'http://dnd5eapi.co';

const SearchView = ({navigation}) => {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [combatants, setCombatants] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [currentMonster, setCurrentMonster] = useState({});

  useEffect(() => {
    console.log(' * you are in useEffect()');

    getDataFromApiAsync('http://dnd5eapi.co/api/monsters').then((result) =>
      setMonsters((prevData) => {
        return result.map((el) => ({...el, id: uuid.v4(), quantity: 0}));
      }),
    );
  }, []);

  async function getDataFromApiAsync(url) {
    try {
      let response = await fetch(url);
      let json = await response.json();
      // console.log('-->', json.results);
      return json.results;
    } catch (error) {
      console.error(error);
    }
  }

  const onInfoPress = (id) => {
    navigation.navigate('Info', {
      url: baseUrl + monsters.filter((el) => el.id === id)[0].url,
    });
  };

  const addMonster = (id) => {
    setMonsters((prev) =>
      prev.map((el) =>
        el.id == id ? {...el, quantity: (el.quantity += 1)} : el,
      ),
    );
    setCombatants((prev) => monsters.filter((el) => el.quantity > 0));
  };

  const removeMonster = (id) => {
    setMonsters((prev) =>
      prev.map((el) =>
        el.id == id ? {...el, quantity: (el.quantity -= 1)} : el,
      ),
    );
    setCombatants((prev) => monsters.filter((el) => el.quantity > 0));
  };

  const renderItem = ({item}) => (
    <ListItem
      item={item}
      addItem={addMonster}
      removeItem={removeMonster}
      onInfoPress={onInfoPress}
    />
  );

  const onSearchInput = (text) => {
    setSearchTerm(text);
  };

  const clearSearchTerm = () => setSearchTerm('');

  const getListData = () =>
    searchTerm == ''
      ? null
      : monsters.filter((li) => li.name.match(new RegExp(searchTerm, 'i')));

  const renderCombatants = () => (
    <View style={styles.monsterListView}>
      <View style={styles.monsterListHeader}>
        <Text style={{color: '#fff', fontSize: 35}}>My Mobs:</Text>
      </View>
      <FlatList
        style={styles.searchResultsList}
        data={combatants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <Text
            style={{
              color: '#a8a8a8',
              fontSize: 20,
              margin: 50,
              alignSelf: 'center',
            }}>
            {'<no mobs yet>'}
          </Text>
        )}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#2f363c', height: 25}} />
      <View style={styles.searchView}>
        <TouchableOpacity onPress={clearSearchTerm}>
          <Icon name="arrow-back" color="#fff" size={26} />
        </TouchableOpacity>
        <TextInput
          value={searchTerm}
          placeholderTextColor={'#fff'}
          placeholder="Search for combatants to add..."
          style={styles.searchTextInput}
          onChangeText={onSearchInput}
          keyboardType="visible-password"
          multiline={false}
          theme={{colors: {primary: 'red'}}}
        />
        {/* <Icon name="clear" color="#fff" size={36} /> */}
        {searchTerm ? (
          <TouchableOpacity onPress={clearSearchTerm}>
            <Icon name="cancel" color="#fff" size={26} />
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.monsterListView}>
        <FlatList
          style={styles.searchResultsList}
          data={getListData()}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          ListEmptyComponent={() => renderCombatants()}
          keyboardShouldPersistTaps="always"
        />
      </View>
      <View style={Styles.buttonView}>
        <Button
          title="Next"
          color="3F1818"
          onPress={() => navigation.push('Combat')}
        />
      </View>
    </View>
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

export default SearchView;

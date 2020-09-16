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
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const ListItem = ({item, addItem, removeItem, onInfoPress}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.name} </Text>
        <TouchableOpacity>
          <Icon
            name="info"
            size={24}
            color="#fff"
            onPress={() => onInfoPress(item.id)}
          />
        </TouchableOpacity>
        <View style={styles.qtyView}>
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Icon name="remove" size={24} color="#c85c5c" />
          </TouchableOpacity>
          <Text style={{fontSize: 24, color: '#fff', marginHorizontal: 12}}>
            {item.quantity}
          </Text>
          <TouchableOpacity onPress={() => addItem(item.id)}>
            <Icon name="add" size={24} color="#c85c5c" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#2f363c',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {fontSize: 24, color: '#c85c5c'},
  qtyView: {flexDirection: 'row', alignItems: 'center'},
});

export default ListItem;

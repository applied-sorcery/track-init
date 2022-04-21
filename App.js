/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

const CombatScreen = () => {
  //set screen state to CombatantsScreen
  return (
    <View>
      <Text>Combat Screen</Text>>
    </View>
  );
};
const CombatantsScreen = () => {
  //set screen state to CombatantsScreen
  return (
    <View>
      <Text>Combatant Screen</Text>>
    </View>
  );
};

const HomeScreen = props => {
  const onCombatPress = () => {
    //set screen state to CombatScreen
    props.setViewChild('combat screen');
  };

  const onCombatantsPress = () => {
    //set screen state to CombatantsScreen
    props.setCurrentView('combatants screen');
  };

  return (
    <View
      style={{
        backgroundColor: props.isDarkMode ? Colors.black : Colors.white,
      }}>
      <View style={styles.buttonViewStyle}>
        <Button style={styles.buttonStyle} title="new">
          Create New Combat
        </Button>
        <Button title="Combats" onPress={() => onCombatPress()}>
          Saved Combats
        </Button>
        <Button title="combatants " onPress={onCombatantsPress}>
          Combatants
        </Button>
      </View>
    </View>
  );
};
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App: () => Node = () => {
  const [currentView, setCurrentView] = useState('home screen');
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const setViewChild = view => setCurrentView(view);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        {currentView == 'home screen' ? (
          <HomeScreen props={(isDarkMode, Colors, setViewChild)} />
        ) : currentView == 'combat screen' ? (
          <CombatScreen />
        ) : currentView == 'combatants screen' ? (
          <CombatantsScreen />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    margin: '50',
    padding: '15',
    width: '10%',
  },
  buttonViewStyle: {
    justifyContent: 'space-between',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

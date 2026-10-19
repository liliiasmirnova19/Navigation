import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import TabNavigator from './components/TabNavigator';
import RootNavigator from './screens/Root';

import Page1 from './screens/page1';
import Page2 from './screens/page2';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Tabs" screenOptions={{ headerShown: false }}>
        <Tab.Screen name ="Page1" component={Page1} />
        <Tab.Screen name ="Page2" component={Page2} />
        <Tab.Screen name="Tabs" component={TabNavigator} />
        <Tab.Screen name="Root" component={RootNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

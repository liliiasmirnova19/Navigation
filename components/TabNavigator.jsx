import page1 from './screens/page1';
import page2 from './screens/page2';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function TabNavigator (){
  return (
    <Stack.Navigator
      initialRouteName="page1"
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen
        initialParams={{
          screen: 'page1',
        }}
        options={{
          unmountOnBlur: true,
        }}
        name="page1"
        component={page1}
      />

      <Stack.Screen
        initialParams={{
          screen: 'page2',
        }}
        options={{
          unmountOnBlur: true,
        }}
        name="page2"
        component={page2}
      />
    </Stack.Navigator>
  )
  }
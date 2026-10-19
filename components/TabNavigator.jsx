import Page1 from '../screens/Page1-Temp';
import Page2 from '../screens/Page2-Temp';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function TabNavigator (){
  return (
    <Stack.Navigator
      initialRouteName="Page1"
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen
        initialParams={{
          screen: 'Page1',
        }}
        options={{
          unmountOnBlur: true,
        }}
        name="Page1"
        component={Page1}
      />

      <Stack.Screen
        initialParams={{
          screen: 'B',
        }}
        options={{
          unmountOnBlur: true,
        }}
        name="Page2"
        component={Page2}
      />
    </Stack.Navigator>
  )
  }
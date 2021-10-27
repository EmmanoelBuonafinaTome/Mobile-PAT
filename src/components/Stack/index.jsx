import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../../screens/Home';
import { Form } from '../../screens/Form';

// interface RouterProps {}

const Stack = createStackNavigator();

export default function stack() {
  
  return (
    <Stack.Navigator 
      initialRouteName='Form' 
      screenOptions={{ 
        headerShown: false, 
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Form' component={Form} />
    </Stack.Navigator>
  );
};
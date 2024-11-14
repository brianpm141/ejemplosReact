import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AltasView from './usr/components/altas';
import BajasView from './usr/components/bajas';
import ModView from './usr/components/modificaciones';
import ReporteView from './usr/components/reportes';
import HomeScreen from './usr/components/homeScreen';


const Tab = createBottomTabNavigator();

function RootStack() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Altas" component={AltasView} />
      <Tab.Screen name="Bajas" component={BajasView} />
      <Tab.Screen name="Modificaciones" component={ModView} />
      <Tab.Screen name="Reportes" component={ReporteView} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
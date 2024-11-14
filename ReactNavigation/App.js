import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Image } from 'react-native';
import AltasView from './scr/components/altas';
import BajasView from './scr/components/bajas';
import ModView from './scr/components/modificaciones';
import ReporteView from './scr/components/reportes';
import HomeScreen from './scr/components/homeScreen';
import app from './scr/utils/firebase'


const Tab = createBottomTabNavigator();


function RootStack() {
  return (
    <Tab.Navigator initialRouteName="Inicio">
      <Tab.Screen name="Altas" component={AltasView} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/icons/alta.png')}
            style={{ width: size, height: size, tintColor: color }} />
          ),
        }}  
      />
      <Tab.Screen name="Bajas" component={BajasView}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image source={require('./assets/icons/baja.png')}
          style={{ width: size, height: size, tintColor: color }} />
        ),
      }}  
      />
      <Tab.Screen name="Inicio" component={HomeScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./assets/icons/home.png')}
            style={{ width: size, height: size, tintColor: color }} />
          ),
        }} 
      />
      <Tab.Screen name="Modificaciones" component={ModView}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image source={require('./assets/icons/editar.png')}
          style={{ width: size, height: size, tintColor: color }} />
        ),
      }} 
      />
      <Tab.Screen name="Reportes" component={ReporteView} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Image source={require('./assets/icons/reporte.png')}
          style={{ width: size, height: size, tintColor: color }} />
        ),
      }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
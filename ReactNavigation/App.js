import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; // Importar Stack Navigator
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Image, SafeAreaView } from 'react-native';
import AltasView from './scr/components/views/altas';
import BajasView from './scr/components/views/bajas';
import ModView from './scr/components/views/modificaciones';
import ReporteView from './scr/components/views/reportes';
import HomeScreen from './scr/components/views/homeScreen';
import Cumples from './scr/components/views/cumple';
import app from './scr/utils/firebase';
import stylesLog from './stylesLog';
import Auth from './scr/components/loggin/auth';
import styles from './styles';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Crear Stack Navigator

// Definir Stack Navigator para pantallas internas
function InternalStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Inicio" 
        component={HomeScreen} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Cumples" 
        component={Cumples} 
        options={{ title: 'Cumpleaños' }} 
      />
    </Stack.Navigator>
  );
}

// Definir Tab Navigator con el InternalStack incluido
function RootStack() {
  return (
    <Tab.Navigator initialRouteName="Inicio">
      <Tab.Screen 
        name="Altas" 
        component={AltasView} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('./assets/icons/alta.png')}
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
        }}  
      />
      <Tab.Screen 
        name="Bajas" 
        component={BajasView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('./assets/icons/baja.png')}
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
        }}  
      />
      <Tab.Screen 
        name="Inicio" 
        component={InternalStack} // Cambiar a InternalStack
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('./assets/icons/home.png')}
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Modificaciones" 
        component={ModView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('./assets/icons/editar.png')}
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
        }} 
      />
      <Tab.Screen 
        name="Reportes" 
        component={ReporteView} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image 
              source={require('./assets/icons/reporte.png')}
              style={{ width: size, height: size, tintColor: color }} 
            />
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(undefined);

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

  if (user === undefined) {
    return (
      <SafeAreaView style={stylesLog.background}>
        <Auth />
      </SafeAreaView>
    );
  } else {
    return (
      <NavigationContainer style={styles.general}>
        <RootStack />
      </NavigationContainer>
    );
  }
}

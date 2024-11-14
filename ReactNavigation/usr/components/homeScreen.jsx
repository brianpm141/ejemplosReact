import * as React from 'react';
import { View, Text } from 'react-native';
import {useNavigation,} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';


export default function HomeScreen() {
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => navigation.navigate('Altas')}>
          Altas
        </Button>
        <Button onPress={() => navigation.navigate('Bajas')}>
          Bajas
        </Button>
        <Button onPress={() => navigation.navigate('Modificaciones')}>
          Modificacion 
        </Button>
        <Button onPress={() => navigation.navigate('Reportes')}>
          Reportes
        </Button>
      </View>
    );
  }
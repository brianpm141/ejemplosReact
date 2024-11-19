import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {useNavigation,} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { getAuth, signOut } from "firebase/auth";
import stylesLog from '../../../stylesLog';
import styles from '../../../styles';


export default function HomeScreen() {
  
  function singOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
    }).catch((error) => {
    });
  }

    const navigation = useNavigation();
    return (
      <View style={styles.Home}>  
      <View style = {styles.homeButtons}>
        <Button onPress={() => navigation.navigate('Cumples')} style = {styles.buttonNavigator}>
          Cumpleaños
        </Button>
      </View>  
      <View style = {stylesLog.singOutView}>
        <TouchableOpacity style={stylesLog.button}  onPress={singOut}>
          <Text style={stylesLog.buttonText}>Cerrar sesion</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
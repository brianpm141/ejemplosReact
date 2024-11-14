import { StyleSheet, View,TextInput, TouchableOpacity, Text } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { React, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import styles from '../../styles';


export default function Form(props) {
const {setCapital,setInterest,setMonths} = props
const [selectedLanguage, setSelectedLanguage] = useState('');

function singOut(){
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}


  return (
  <>
  <View style={styles.viewForm}>

    <View style={styles.viewInputs}>
        <TextInput 
          placeholder="Prestamo"
          keyboardType="numeric"
          style={[styles.midInput, styles.inputlarge]}
          onChange={e=>setCapital(e.nativeEvent.text)} //lo que escriba se guarda en text 
        />
        <TextInput 
          placeholder="Interés %"
          keyboardType="numeric"
          style={[styles.midInput, styles.inputPercentage]}
          onChange={e=>setInterest(e.nativeEvent.text)} // Guarda el valor de Interés
        />
    </View>

    <View>
        <Picker 
        style={styles.inputpick}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue)
          setMonths(itemValue)
          }
          }>

          <Picker.Item label="3 meses" value={3} />
          <Picker.Item label="6 meses" value={6} />
          <Picker.Item label="9 meses" value={9} />
          <Picker.Item label="12 meses" value={12} />
          <Picker.Item label="24 meses" value={24} />
        </Picker>
    </View>

    <View style={styles.containerForm}>
        <TouchableOpacity style={[styles.button, styles.buttonWhite]}  onPress={singOut}>
          <Text style={styles.buttonTextWhite}>Cerrar sesion</Text>
        </TouchableOpacity>
    </View>

  </View>
  </>
    
  );
}


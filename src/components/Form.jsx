import { StyleSheet, View,TextInput, TouchableOpacity, Text } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { React, useState } from "react";
import { getAuth, signOut } from "firebase/auth";


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
          style={styles.input}
          onChange={e=>setCapital(e.nativeEvent.text)} //lo que escriba se guarda en text 
        />
        <TextInput 
          placeholder="Interés %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentage]}
          onChange={e=>setInterest(e.nativeEvent.text)} // Guarda el valor de Interés
        />
    </View>

    <View>
        <Picker 
        style={styles.inputpick}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue)
          setMonths(itemValue) // Guarda el valor de Meses
          }
          }>

          <Picker.Item label="3 meses" value={3} />
          <Picker.Item label="6 meses" value={6} />
          <Picker.Item label="9 meses" value={9} />
          <Picker.Item label="12 meses" value={12} />
          <Picker.Item label="24 meses" value={24} />
        </Picker>
    </View>

    <View style={styles.container}>
        <TouchableOpacity style={styles.button}  onPress={singOut}>
          <Text style={styles.buttonText}>Cerrar sesion</Text>
        </TouchableOpacity>
    </View>

  </View>
  </>
    
  );
}

const styles = StyleSheet.create({
  viewForm: {
    backgroundColor: '#1541be',
    width:'85%',
    height: '60%',
    borderRadius:20,
    padding : 10
  },
  input: {
    height:'80%',
    width:'65%',
    backgroundColor:'#fff',
    marginBottom:5,
    marginTop:10,
    color:'#000',
    borderWidth:1,
    borderColor: '#1541be',
    borderRadius:3,
    padding: 5
  },
  inputPercentage:{
    width:'35%',
    padding:10
  },
  viewInputs:{
    flexDirection:'row',
  },
  inputpick:{
    backgroundColor:'#fff',
    borderRadius:5,
    borderWidth:1,
    paddingVertical:10,
}
})


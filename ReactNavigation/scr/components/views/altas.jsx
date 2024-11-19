import React, { useState } from "react";
import { View, Text,TextInput, TouchableOpacity } from 'react-native';
import styles from "../../../styles";
import { getDatabase, push, ref, set } from "firebase/database";


export default function AltasView() {

  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [horas, setHoras] = useState("");
  const [puesto, setPuesto] = useState("");
  const [error, setError] = useState("")

function crear(){
  if((nombre && edad && horas && puesto) === ""){
    setError("Llena los campos de texto para continuar")
  }else if(edad < 17){
    setError("Un trabajador no puede ser menor de edad")
  }
  else{
    const db = getDatabase();

    push(ref(db, 'trabajadores/'), {
      nombre: nombre,
      edad: edad,
      horas:horas,
      puesto:puesto
    });

    setNombre("")
    setEdad("")
    setHoras("")
    setPuesto("")
    setError("Registro Completado")
  }
  }


    return (
    <View style = {styles.general}>
      <View style={styles.formAltas}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(text) => setNombre(text)}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          keyboardType="numeric"
          onChangeText={(text) => setEdad(text)}
          value={edad}
        />
        <TextInput
          style={styles.input}
          placeholder="Horas trabajadas"
          keyboardType="numeric"
          onChangeText={(text) => setHoras(text)}
          value={horas}
        />
        <TextInput
          style={styles.input}
          placeholder="Puesto de trabajo"
          onChangeText={(text) => setPuesto(text)}
          value={puesto}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={crear}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }



import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../../../styles";
import { getDatabase, push, ref } from "firebase/database";

export default function AltasView() {
  const [nombre, setNombre] = useState("");
  const [horas, setHoras] = useState("");
  const [puesto, setPuesto] = useState("");
  const [error, setError] = useState("");
  const [nacimiento, setNacimiento] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  function crear() {
    if ((nombre && horas && puesto) === "") {
      setError("Llena los campos de texto para continuar");
    } else {
      const db = getDatabase();
      push(ref(db, "trabajadores/"), {
        nombre: nombre,
        horas: horas,
        puesto: puesto,
        nacimiento: nacimiento,
      });

      setNombre("");
      setHoras("");
      setPuesto("");
      setNacimiento("");
      setError("Registro Completado");
    }
  }

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const formattedDate = selectedDate.toISOString().split("T")[0]; 
      setNacimiento(formattedDate);
    }
  };

  return (
    <View style={styles.general}>
      <View style={styles.formAltas}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(text) => setNombre(text)}
          value={nombre}
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
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            style={styles.inputDate}
            placeholder="Fecha de nacimiento"
            value={nacimiento}
            editable={false}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={nacimiento ? new Date(nacimiento) : new Date()}
            mode="date"
            display={Platform.OS === "ios" ? "inline" : "default"}
            onChange={handleDateChange}
          />
        )}
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

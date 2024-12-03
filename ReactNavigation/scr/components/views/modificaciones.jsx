import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../../../styles";
import { getDatabase, push, ref } from "firebase/database";
import { useRoute } from "@react-navigation/native"; // Importa hook para recibir parámetros

export default function ModView() {
  const route = useRoute(); // Obtén los parámetros de navegación
  const trabajador = route.params?.trabajador; // Trabajador pasado como parámetro

  const [nombre, setNombre] = useState(trabajador?.nombre || "");
  const [horas, setHoras] = useState(trabajador?.horas || "");
  const [puesto, setPuesto] = useState(trabajador?.puesto || "");
  const [nacimiento, setNacimiento] = useState(trabajador?.nacimiento || "");
  const [error, setError] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  function actualizar() {
    if (!nombre || !horas || !puesto) {
      setError("Llena los campos de texto para continuar");
    } else {
      const db = getDatabase();
      const trabajadorRef = ref(db, `trabajadores/${trabajador.id}`);
      update(trabajadorRef, {
        nombre,
        horas,
        puesto,
        nacimiento,
      })
        .then(() => {
          Alert.alert("Éxito", "Trabajador actualizado");
        })
        .catch(() => {
          Alert.alert("Error", "No se pudo actualizar al trabajador");
        });
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
          onChangeText={setNombre}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Horas trabajadas"
          keyboardType="numeric"
          onChangeText={setHoras}
          value={horas}
        />
        <TextInput
          style={styles.input}
          placeholder="Puesto de trabajo"
          onChangeText={setPuesto}
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
        <TouchableOpacity style={styles.button} onPress={actualizar}>
          <Text style={styles.buttonText}>Guardar Cambios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

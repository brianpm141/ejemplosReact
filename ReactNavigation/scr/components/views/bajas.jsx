import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import styles from "../../../styles";
import { getDatabase, ref, onValue, remove } from "firebase/database";

export default function BajasView() {
  const [trabajadores, setTrabajadores] = useState([]); 

  useEffect(() => {
    const db = getDatabase(); 
    const trabajadoresRef = ref(db, "trabajadores"); 

    const unsubscribe = onValue(trabajadoresRef, (snapshot) => {
      const data = snapshot.val(); 
      if (data) {
        const trabajadoresArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTrabajadores(trabajadoresArray);
      } else {
        setTrabajadores([]); // Reinicia si no hay datos
      }
    });

    return () => unsubscribe(); // Limpia el listener
  }, []); 

  const handleDelete = (id) => {
    const db = getDatabase();
    const trabajadorRef = ref(db, `trabajadores/${id}`);
    
    // Confirmación antes de eliminar
    Alert.alert(
      "Eliminar Trabajador",
      "¿Estás seguro de que deseas eliminar este trabajador?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Eliminar",
          onPress: () => {
            remove(trabajadorRef)
              .then(() => {
                Alert.alert("Éxito", "Trabajador eliminado");
              })
              .catch((error) => {
                Alert.alert("Error", "No se pudo eliminar el trabajador");
              });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.general}>
      <View style={styles.generalCards}>
        <FlatList
          data={trabajadores} 
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleDelete(item.id)} // Acción de eliminar
            >
              <View style={styles.workerCard}>
                <Text style={styles.workerText}>Nombre: {item.nombre}</Text>
                <Text style={styles.workerText}>Puesto: {item.puesto}</Text>
                <Text style={styles.workerText}>Horas: {item.horas}</Text>
                <Text style={styles.workerText}>Nacimiento: {item.nacimiento}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

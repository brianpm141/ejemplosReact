import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, Image } from "react-native";
import styles from "../../../styles";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useNavigation } from "@react-navigation/native"; // Importa hook de navegación


export default function ReporteView() {
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

  const navigation = useNavigation(); // Hook para navegar

  const handleModify = (trabajador) => {
    navigation.navigate("ModView", { trabajador }); // Navega a ModView con datos
  };

  return (
    <View style={styles.general}>
      <View style={styles.generalCards}>
        <FlatList
          data={trabajadores} 
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
              <View style={styles.workerCard}>
                <Text style={styles.workerText}>Nombre: {item.nombre}</Text>
                <Text style={styles.workerText}>Puesto: {item.puesto}</Text>
                <Text style={styles.workerText}>Horas: {item.horas}</Text>
                <Text style={styles.workerText}>Nacimiento: {item.nacimiento}</Text>
                
                <View style={styles.table}>
                  <View style={styles.row}>
                    <View style={styles.cellEdit}>
                      <TouchableOpacity onPress={() => handleModify(item)}>
                      <Image 
                          source={require('../../../assets/icons/Edit.png')}
                          style = {styles.image}
                        />
                      <Text style = {styles.optionText}>Modificar</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.cellDelete}>
                      <TouchableOpacity onPress={() => handleDelete(item.id)} >
                      <Image 
                          source={require('../../../assets/icons/Delete.png')}
                          style = {styles.image}
                        />
                        <Text style = {styles.optionText}>Eliminar</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

              </View>
          )}
        />
      </View>
    </View>
  );
}

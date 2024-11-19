import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import styles from "../../../styles";
import { getDatabase, ref, onValue } from "firebase/database";

export default function Cumples() {
  const [trabajadores, setTrabajadores] = useState([]);
  const [primerTrabajador, setPrimerTrabajador] = useState(null);

  useEffect(() => {
    const db = getDatabase();
    const trabajadoresRef = ref(db, "trabajadores");

    onValue(trabajadoresRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const trabajadoresArray = Object.keys(data).map((key) => ({
          id: key,
          nombre: data[key].nombre,
          nacimiento: data[key].nacimiento,
        }));

        const today = new Date();
        const currentMonth = today.getMonth();
        const currentDay = today.getDate();

        const calculateDaysDifference = (currentMonth, currentDay, birthDate) => {
          const birthMonth = birthDate.getMonth();
          const birthDay = birthDate.getDate();

          if (
            birthMonth < currentMonth ||
            (birthMonth === currentMonth && birthDay < currentDay)
          ) {
            const nextBirthday = new Date(
              today.getFullYear() + 1,
              birthMonth,
              birthDay
            );
            return Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
          } else {
            const nextBirthday = new Date(
              today.getFullYear(),
              birthMonth,
              birthDay
            );
            return Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
          }
        };

        const sortedArray = trabajadoresArray.sort((a, b) => {
          const dateA = new Date(a.nacimiento);
          const dateB = new Date(b.nacimiento);

          const diffA = calculateDaysDifference(currentMonth, currentDay, dateA);
          const diffB = calculateDaysDifference(currentMonth, currentDay, dateB);

          return diffA - diffB;
        });

        setTrabajadores(sortedArray);
        setPrimerTrabajador(sortedArray[0] || null); // Actualiza el primer trabajador
      }
    });
  }, []);

  return (
    <View style={styles.generalBirth}>
      <View style={styles.cumpleCard}>
        <Text style={styles.cumpleNameTitle}>Próximo cumpleaños</Text>
        <View style={styles.nextCumpleCard}>
          <Text style={styles.cumpleNameText}>
            {primerTrabajador ? primerTrabajador.nombre : "N/A"}
          </Text>
        </View>
      </View>
      <View style={styles.secundaryCards}>
        <FlatList
          data={trabajadores}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.workerCard}>
              <Text style={styles.workerText}>Nombre: {item.nombre}</Text>
              <Text style={styles.workerText}>Cumpleaños: {item.nacimiento}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

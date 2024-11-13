import React, { useEffect, useState } from "react";
import { View, Animated, Text, TouchableOpacity } from "react-native";
import LogginForm from "./LogginForm";
import RegisterForm from "./RegisterForm";
import styles from "../../styles";

export default function Auth() {
  const [islog, setIslog] = useState(true);
  const [isChecked, setIsChecked] = useState(true);

  // Define las animaciones fuera de los efectos
  const fadeAnim = useState(new Animated.Value(0))[0];
  const translateX = useState(new Animated.Value(isChecked ? 12 : 0))[0];

  useEffect(() => {
    // Animación de aparición inicial
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    // Animación de desvanecimiento cuando se cambia el formulario
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, [islog]);

  useEffect(() => {
    // Animación del interruptor cuando cambia isChecked
    Animated.timing(translateX, {
      toValue: isChecked ? 12 : 0,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, [isChecked]);

  const toggleSwitch = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setIslog(newCheckedState); // Sincroniza islog con el estado de isChecked
  };

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.loader}>
          <Animated.Text style={[styles.word, { opacity: fadeAnim }]}>
            {islog ? "Ingresar" : "Regístrate"}
          </Animated.Text>
        </View>
      </View>

      {islog ? (<LogginForm />) : (<RegisterForm/>)}

      {/* Interruptor integrado al final */}
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleSwitch} style={styles.switchLabel}>
          <View style={[styles.switchBackground, isChecked && styles.switchBackgroundChecked]}>
            <Animated.View style={[styles.switchToggle, { transform: [{ translateX }] }]} />
          </View>
          <Text style={styles.text}>{isChecked ? "Registrarse" : "Iniciar sesión" }</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

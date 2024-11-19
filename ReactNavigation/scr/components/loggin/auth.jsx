import React, { useEffect, useState } from "react";
import { View, Animated, Text, TouchableOpacity } from "react-native";
import LogginForm from "./LogginForm";
import RegisterForm from "./RegisterForm";
import stylesLog from "../../../stylesLog";

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
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [islog]);

  useEffect(() => {
    // Animación del interruptor cuando cambia isChecked
    Animated.timing(translateX, {
      toValue: isChecked ? 12 : 0,
      duration: 800,
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
      <View style={stylesLog.card}>
        <View style={stylesLog.loader}>
          <Animated.Text style={[stylesLog.word, { opacity: fadeAnim }]}>
            {islog ? "Ingresar" : "Regístrate"}
          </Animated.Text>
        </View>
      </View>

      {islog ? (<LogginForm />) : (<RegisterForm/>)}

      {/* Interruptor integrado al final */}
      <View style={stylesLog.container}>
        <TouchableOpacity onPress={toggleSwitch} style={stylesLog.switchLabel}>
          <View style={[stylesLog.switchBackground, isChecked && stylesLog.switchBackgroundChecked]}>
            <Animated.View style={[stylesLog.switchToggle, { transform: [{ translateX }] }]} />
          </View>
          <Text style={stylesLog.text}>{isChecked ? "Registrarse" : "Iniciar sesión" }</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import stylesLog from "../../../stylesLog";

export default function LogginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const Loggin = () => {
    if (email === "" || password === "") {
      setError("Ingresa correo y contraseña para continuar");
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setError(""); // Limpiar el error si el inicio de sesión es exitoso
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found") {
            setError("Correo o contraseña incorrectos");
          } else {
            setError("Correo o contraseña incorrectos");
          }
        });
    }
  };

  return (
    <View>
      <View style={stylesLog.form}>
        <TextInput
          style={stylesLog.input}
          placeholder="Correo"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={stylesLog.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        {error ? <Text style={stylesLog.errorText}>{error}</Text> : null}
      </View>

      <View style={stylesLog.container}>
        <TouchableOpacity style={stylesLog.button} onPress={Loggin}>
          <Text style={stylesLog.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

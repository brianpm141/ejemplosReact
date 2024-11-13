import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../../styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

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
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Correo"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={Loggin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../../styles";
import { validateEmail } from "../utils/validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const Register = () => {
        if ((email && password) === "" ){
            setError("Ingresa correo y contraseña para continuar")
        } else if (!validateEmail(email)) {
            setError("El correo electrónico no es válido");
        } else if (password.length < 8 || password.length > 16) {
            setError("La contraseña debe tener entre 8 y 16 caracteres");
        } else if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
        } else {
            const auth = getAuth();
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
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
                <TextInput
                    style={styles.input}
                    placeholder="Confirma Contraseña"
                    secureTextEntry={true}
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                />

                {error ? (
                    <Text style = {styles.errorText} >{error}</Text>
                ) : null}

            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={Register}>
                    <Text style={styles.buttonText}>Regístrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

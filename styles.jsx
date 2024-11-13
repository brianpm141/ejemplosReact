import { StyleSheet , Dimensions}from "react-native";


const { width } = Dimensions.get('window');

const dynamicFontSize = width * 0.06; // Cambia el 0.05 para ajustar la escala del tamaño de fuente


const styles = StyleSheet.create({
    background: {
      flex: 1, // Asegura que SafeAreaView ocupe todo el espacio disponible
      backgroundColor: '#d9d9d9',
      padding : 5
    },
    card: {
      minwidth : '100%',
      marginTop : '10%',
      alignItems: 'center',
      padding: 5,
      marginBottom: '5%'
    },    
    loader: {
    alignItems: 'center',
    alignItems : 'center'
    },
    word: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007bff',
    },
    container: {
      alignItems: 'center',
      maxHeight: '20%',
      minWidth : '100%',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderColor: '#193a99',
      borderWidth: 2,
      borderRadius: 5,
      marginVertical: 10,
      width: '60%',
    },
    buttonText: {
      fontSize: 18,
      fontWeight: '600',
      color: '#193a99',
    },
    form: {
      marginBottom: '5%',
      alignItems: 'center',
      minHeight : '65%',
      maxHeight: '65%',
      minWidth: '100%',
    },
    input: {
      backgroundColor: '#eee',
      borderRadius: 10, 
      padding: 5, 
      fontSize: dynamicFontSize, 
      width: '80%', 
      height: '20%',
      color: 'lightcoral',
      margin : '2%'
    },
    errorText: {
      borderWidth : 3,
      borderRadius: 10, 
      padding: 5,
      borderBlockColor: 'red', 
      fontSize: dynamicFontSize, 
      width: '80%', 
      height: '20%',
      margin : '2%'
    },
    switchLabel: {
      flexDirection: "row",
      alignItems: "center",
    },
    switchBackground: {
      width: 25,
      height: 15,
      backgroundColor: "#4b4b4b",
      borderRadius: 15,
      marginRight: 8,
      position: "relative",
    },
    switchBackgroundChecked: {
      backgroundColor: "#04149c",
    },
    switchToggle: {
      width: 13,
      height: 13,
      backgroundColor: "#fff",
      borderRadius: 13,
      position: "absolute",
      top: 1,
      left: 1,
    },
    text: {
      fontSize: 12,
      color: "#78768d",
      fontWeight: "bold",
    },
    // estilo de cotizador

    containerTitle: {
      backgroundColor: '#1541be',
      height: '35%',
      alignItems: 'center',
      padding: 5,
    },
    title: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      padding: 10,
    },
  });

export default styles
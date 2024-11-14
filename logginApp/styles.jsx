import { StyleSheet , Dimensions}from "react-native";


const { width } = Dimensions.get('window');

const dynamicFontSize = width * 0.06;
const dynamicFontSizeTitle = width * 0.08;
const dynamicFontSizeOption = width * 0.05;


const styles = StyleSheet.create({
    background: {
      flex: 1, // Asegura que SafeAreaView ocupe todo el espacio disponible
      backgroundColor: '#d9d9d9',
      padding : 5
    },

  //button
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#193a99',
    borderWidth: 2,
    borderRadius: 5,
    width: '60%',
  },
  buttonText: {
    fontSize: dynamicFontSizeOption,
    fontWeight: '600',
    color: '#193a99',
  },
  buttonWhite:{
    borderColor: '#fff',
  },
  buttonTextWhite: {
    fontWeight: '600',
    color: '#fff',
  },
  // Loggin

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
    containerForm: {
      alignItems: 'center',
      height: '100%', 
      minWidth : '100%',
      alignItems: 'center',
    },
    containerTitle: {
      backgroundColor: '#1541be',
      height: '35%',
      alignItems: 'center',
      padding: 5,
      minwidth: '100%'
    },
    title: {
      color: '#fff',
      fontSize: dynamicFontSizeTitle,
      fontWeight: 'bold',
      padding: 5,
      maxHeight: '25%',
      margin: 0
    },
    viewForm: {
      width:'100%',
      height: '70%',
      paddingHorizontal : '5%'
    },
    midInput: {
      height:'75%',
      minWidth: '30%',
      maxWidth: '70%',
      backgroundColor:'#fff',
      marginBottom:5,
      marginTop:10,
      color:'#000',
      borderWidth:1,
      borderColor: '#1541be',
      borderRadius:5,
      padding:3,
    },
    inputPercentage:{
      width:'30%',
      padding:5
    },
    inputlarge:{
      width:'70%',
      padding:5
    },
    viewInputs:{
      flexDirection:'row',
      minWidth: '100%',
      height: '40%',
      padding: 0
    },
    inputpick:{
      backgroundColor:'#fff',
      width: '100%',
      height: '40%',
      borderRadius:5,
      padding: 5,
  },
  error:{
    backgroundColor: '#0433b9',
    padding: 5,
    minWidth: '80%',
    minHeight: '15%',
    borderRadius: 10,
    color: 'white',
    textAlign:'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: dynamicFontSize,
    marginTop: '30%'
  },
  resultCont:{
    alignItems: 'center',
    padding: '5%',
    minWidth: '100%',
    minHeight: '70%'
  },
  calculateTitle:{
    padding:5,
    textAlign:'center',
    fontSize: dynamicFontSize,
    height: '14%'
  },
  rest:{
    width :'100%',
    height : '70%',
    borderWidth:1,
    padding :'5%',
    alignContent : 'center',
    borderRadius: 15,
    borderBlockColor : '#0433b9'
  },
  row:{
    borderWidth: 1,          
    borderColor: '#ccc',     
    borderRadius: 5,          
    padding: 5,
    height:'13%',
    marginTop: '3%',                
    fontSize: dynamicFontSizeOption,
    textAlign: 'center',
  }
  });

export default styles
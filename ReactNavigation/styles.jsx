import { StyleSheet , Dimensions}from "react-native";


const { width } = Dimensions.get('window');

const dynamicFontSize = width * 0.06;
const dynamicFontSizeTitle = width * 0.08;
const dynamicFontSizeOption = width * 0.04;


const styles = StyleSheet.create({

general: {
    backgroundColor: '#d1d1d1',
    paddingVertical: '5%'
},
// --------------------------------------------Componentes Altas----------------------------
formAltas: {
    alignItems: 'center',
    height:'85%',
    minWidth: '100%',
  },
  input: {
    backgroundColor: '#eee',
    borderRadius: 10, 
    padding: 5, 
    fontSize: dynamicFontSize, 
    width: '80%', 
    height: '17%',
    color: '#191919',
    margin : '2%'
  },
  errorText: {
    borderRadius: 10, 
    padding: 5,
    fontSize: dynamicFontSize,
    textAlign: 'center', 
    width: '70%', 
    height: '15%',
    margin : '2%'
  },

  //-------------------------------------Botones--------------------------

  buttonContainer: {
    alignItems: 'center',
    height: '15%',
    minWidth : '100%',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#1c19b0',
    borderWidth: 2,
    borderRadius: 5,
    width: '60%',
    height: '70%'
  },
  buttonText: {
    fontSize: dynamicFontSizeOption,
    fontWeight: '600',
    color: '#1c19b0',
  },
})

export default styles
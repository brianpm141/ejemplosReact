import { StyleSheet , Dimensions}from "react-native";


const { width } = Dimensions.get('window');

const dynamicFontSize = width * 0.06;
const dynamicFontSizeTitle = width * 0.08;
const dynamicFontSizeText = width * 0.05;
const dynamicFontSizeOption = width * 0.04;
const dynamicFontSizeMinimal = width * 0.03;


const styles = StyleSheet.create({

general: {
  backgroundColor: '#d1d1d1',
  paddingVertical: '5%',
  flex:1,
},
homeButtons: {
    marginTop: '5%',
    alignItems: 'center',
    height:'75%',
    minWidth: '100%',
  },

//---------------------------------------------Workers Cards--------------------------------
generalCards: {
  minWidth: '100%',
  alignItems: 'center',
  minHeight: '100%'
},
generalBirth: {
  backgroundColor: '#d1d1d1',
  paddingVertical: '5%',
  alignItems: 'center'
},
secundaryCards: {
  marginTop: '3%',
  height: '70%',
  minWidth: '100%',
  padding: '5%',
  alignItems: 'center'
},
workerCard: {
  backgroundColor: "#ffffff",
  marginTop: '5%',
  borderRadius: 10,
  minWidth: '85%',
  padding: '5%'
},
workerText:{
  fontSize: dynamicFontSizeOption
},
cumpleCard:{
  marginTop: '3%',
  minHeight: '20%',
  width: '85%',
  padding: '5%',
  backgroundColor: '#ffffff',
  borderColor: '#0348d1',
  borderWidth: 1,
  borderRadius: 10,
  alignItems: 'center'
},
cumpleNameTitle:{
  fontSize: dynamicFontSize,
  fontWeight: 'bold',
  alignItems: 'center',
  padding: '2%'
},
nextCumpleCard: {
  marginTop: '2%',
  padding: '2%',
  alignItems: 'center',
  minHeight: '8%',
  minWidth: '60%',
  backgroundColor: '#6595f7',
  borderColor: '#0338a4',
  borderWidth: 3,
  borderRadius: 10,
},
cumpleNameText:{
  fontSize: dynamicFontSizeText,
  fontWeight: 'bold',
  alignItems: 'center',
  padding: '2%'
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
    height: '15%',
    color: '#191919',
    margin : '2%'
  },
  inputDate: {
    padding: 5,
    backgroundColor: '#eee',
    textAlign: 'center',
    minHeight: '15%',
    minWidth: "60%",
    margin : '2%',
    borderRadius: 10, 
    fontSize: dynamicFontSizeOption
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
  buttonNavigator: {
    width: '60%'
  },
// Contenedores 
  titleContainer: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    fontSize: dynamicFontSizeTitle
  },

//-------------------------------------------Cruds------------------------------------------

table: {
  marginTop: '5%'
},
row: {
  flexDirection: 'row',
},
cellEdit: {
  flex: 1,
  alignItems: 'center',
  pading:'5%'
},
cellDelete: {
  flex: 1,
  alignItems: 'center',
  pading:'5%'
},
image:{
  width: 30,
  height: 30, 
  resizeMode: 'contain'
},
optionText:{
  fontSize: dynamicFontSizeMinimal,
  textAlign:'center',
  fontWeight: 'bold',
}

})

export default styles
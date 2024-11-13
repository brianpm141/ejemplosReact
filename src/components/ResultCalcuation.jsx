import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultCalculation(props) {
const {capital,interest,months,total,errorMessage} = props
  return (
    <View style={styles.content}>
      {total && (
        <View style = {styles.rest}>
            <Text style = {styles.calculate}>RESULTADO TOTAL</Text>
            <Text style = {styles.row}>Capital: {capital}</Text>
            <Text style = {styles.row}>Interés: {interest}</Text>
            <Text style = {styles.row}>Meses: {months}</Text>
            <Text style = {styles.row}>Cuota mensual: {total.monthlyFee}</Text>
            <Text style = {styles.row}>Total a pagar: {total.totalPayable}</Text>
        </View>
        )}
        {errorMessage !== '' && (
          <View>
            <Text style={styles.error}>{errorMessage}</Text>
          </View>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
  error:{
    backgroundColor: '#0433b9',
    padding: 10,
    minHeight:'55%',
    maxHeight: '60%',
    maxWidth: '90%',
    Width: '90%',
    borderRadius: 10,
    color: 'white',
    textAlign:'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize:30,
  },
  content:{
    alignItems: 'center',
    paddingTop: '10%'
  },
  calculate:{
    padding:5,
    paddingTop:10,
    textAlign:'center',
    textAlignVertical: 'center',
    fontSize: 24
  },
  rest:{
    width :'90%',
    height : '70%',
    borderWidth:1,
    padding :5,
    alignContent : 'center',
    borderRadius: 15,
    borderBlockColor : '#0433b9'
  },
  row:{
    borderWidth: 1,          
    borderColor: '#ccc',     
    borderRadius: 5,          
    padding: 5,        
    marginVertical: 5,        
    fontSize: 18,
    textAlign: 'center',
  }
})
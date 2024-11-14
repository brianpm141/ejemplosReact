import {Text, View } from 'react-native'
import React from 'react'
import styles from '../../styles'

export default function ResultCalculation(props) {
const {capital,interest,months,total,errorMessage} = props
  return (
    <View style={styles.resultCont}>
      {total && (
        <View style = {styles.rest}>
            <Text style = {styles.calculateTitle}>RESULTADO TOTAL</Text>
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

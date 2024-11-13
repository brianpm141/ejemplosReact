import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from './src/utils/firebase';
import Auth from './src/components/auth';
import styles from './styles';
import Form from './src/components/Form';
import ResultCalculation from './src/components/ResultCalcuation';

export default function App() {
  const [user, setUser] = useState(undefined);
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const calcular = () => {
    setTotal(null);
    setErrorMessage('');

    if (!capital) {
      setErrorMessage('Falta el capital');
    } else if (!interest) {
      setErrorMessage('Falta la tasa de interés');
    } else if (!months) {
      setErrorMessage('Falta la cantidad de meses');
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(1 + i, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2),
        totalPayable: (fee * months).toFixed(2),
      });
      console.log(total);
    }
  };

  // Ejecuta calcular cuando cambie capital, interest o months
  useEffect(() => {
    calcular();
  }, [capital, interest, months]);
  
  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, []);
  
  if (user === undefined) {
    return (
      <SafeAreaView style={styles.background}>
        <Auth />
        <StatusBar style="auto" />
      </SafeAreaView>
        
    );
  } else {
    return (
    <SafeAreaView>  
      <View style={styles.containerTitle}>
          <Text style={styles.title}>COTIZADOR</Text>
          <Form
            setCapital={setCapital}
            setInterest={setInterest}
            setMonths={setMonths}
          />
        </View>
          
          <ResultCalculation
          capital={capital}
          interest={interest}
          months={months}
          total={total}
          errorMessage={errorMessage}
        />
    </SafeAreaView>

    );
  }
}


import * as React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles';


export default function BajasView() {
    return (
      <View style = {styles.general}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bajas</Text>
      </View>
      </View>
    );
  }
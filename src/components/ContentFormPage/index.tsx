import React from 'react';
import { View } from 'react-native';

import { Input } from '../Input';
import { styles } from './styles';

export function ContentFormPage() {
  return (
    <View style={styles.container}>
      <Input placeholder="Nome"/>
      <Input placeholder="Sobrenome"/>
    </View>
  )
}
import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.teste} resizeMode='contain' source={require('../../assets/logo.png')} />
      <Image style={styles.aaa} resizeMode='contain'  source={require('../../assets/prefeitura.png')} />
      <Text style={styles.ccc}>
        PAT Mobile
      </Text>
    </View>
  )
}
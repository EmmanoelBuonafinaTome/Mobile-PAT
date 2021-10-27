import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

type Props = {
  textHeader: string;
};

export function Header({ textHeader }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.fistImage} resizeMode='contain' source={require('../../assets/logo.png')} />
        <Image style={styles.secondaryImage} resizeMode='contain'  source={require('../../assets/prefeitura.png')} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.textHeader}>
          {textHeader}
        </Text>
      </View>
    </View>
  )
}
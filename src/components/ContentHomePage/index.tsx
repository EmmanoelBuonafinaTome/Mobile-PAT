import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';
import { Button } from '../Button/';
import { COLORS } from '../../theme';

export function ContentHomePage() {
  return (
    <View style={styles.container}>
      <Image style={styles.imageHomePage} resizeMode='contain' source={require('../../assets/workers.jpg')} />
      <View style={styles.containerText}>
        <Text style={styles.titleText}>PAT MOBILE</Text>
        <Text style={styles.secondaryText}>Posto de Atendimento ao Trabalhador</Text>
        <Text style={styles.contentText}>
          Canal disponibilizado pela Prefeitura Municipal de Bragança Paulista para o amparo ao emprego.
        </Text>
      </View>
      <Button 
        title='Enviar curriculo' 
        backgroundColor={COLORS.DARK_GREEN}
        onPress={() => {}}
      />
    </View>
  )
}
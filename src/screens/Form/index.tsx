import React from 'react';
import { View } from 'react-native';

import { ContentFormPage } from '../../components/ContentFormPage';
import { Header } from '../../components/Header';
import { styles } from '../Home/styles';

export function Form() {
  return (
    <View style={styles.container}>
      <Header textHeader=""/>
      <ContentFormPage />
    </View>
  )
}
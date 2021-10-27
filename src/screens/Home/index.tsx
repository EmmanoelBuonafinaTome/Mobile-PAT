import React from 'react';
import { View } from 'react-native';

import { ContentHomePage } from '../../components/ContentHomePage';
import { styles } from './styles';
import { Header } from '../../components/Header'

export function Home() {
  return (
    <View style={styles.container}>
      <Header textHeader={'PAT Mobile'} />
      <ContentHomePage />
    </View>
  );
};
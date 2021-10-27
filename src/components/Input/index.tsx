import React from 'react';
import { View, TextInput  } from 'react-native';

import { styles } from './styles';

type Props = {
  placeholder: string;
}

export function Input({
  placeholder,
}: Props) {
  return (
    <View style={styles.input}>
      <TextInput placeholder={placeholder} />
    </View>
  );
};
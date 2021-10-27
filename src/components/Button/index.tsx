import React from 'react';
import { 
  TouchableOpacity, 
  TouchableOpacityProps, 
  ColorValue, 
  Text 
} from 'react-native';

import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  backgroundColor: ColorValue;
}

export function Button({
  title,
  backgroundColor,
  ...rest
}: Props) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.title} >{title}</Text>
    </TouchableOpacity>
  )
}
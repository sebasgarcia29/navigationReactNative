import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

export const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 3 Screen</Text>
      <Button
        title="Regresar"
        onPress={() => navigation.pop()}
      />
      <Button
        title="Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

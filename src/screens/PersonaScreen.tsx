import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { RouteStackParams } from '../navigation/StackNavigator';
import { styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> { }

// interface Props extends StackScreenProps<any, any> { }
interface RouterParams {
  id: number;
  nombre: string;
}

interface Props extends StackScreenProps<RouteStackParams, 'PersonaScreen'> { }

export const PersonaScreen = ({ route, navigation }: Props) => {

  const params = route.params as RouterParams;

  useEffect(() => {
    navigation.setOptions({ title: params.nombre });
  }, [navigation, params]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Persona </Text>
      {/* <Button
        title="Prueba jejeje"
        onPress={() => navigation.navigate('Pagina3Screen')}
      /> */}
    </View>
  );
};

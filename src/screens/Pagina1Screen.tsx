/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, styles } from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> { }
interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={(() => navigation.toggleDrawer())}
          style={{ marginLeft: 10 }}
        >
          <Text>
            <Icon name="bars" size={30} color={colors.primary} />;
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={styles.title}>Navegar con argumentos</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('PersonaScreen', { id: 1, nombre: 'sebas' })}
          style={[styles.buttonTouch, { backgroundColor: '#2A9EED' }]}
        >
          <Text>
            <Icon name="male" size={30} color="white" />
          </Text>
          <Text style={styles.textButtonTouch}>
            Persona Sebas
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('PersonaScreen', { id: 2, nombre: 'Maria' })}
          style={[styles.buttonTouch, { backgroundColor: '#58EE94' }]}
        >
          <Text>
            <Icon name="female" size={30} color="white" />
          </Text>
          <Text style={styles.textButtonTouch}>Persona Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

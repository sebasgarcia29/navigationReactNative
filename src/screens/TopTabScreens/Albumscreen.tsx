/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { styles } from '../../theme/appTheme';
import { AuthContext } from '../../context/AuthContext';

export const AlbumScreen = () => {


  const { logout, authState } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumScreen</Text>

      {!!authState.isLoggedIn && (
        <TouchableOpacity
          style={{ backgroundColor: 'red', borderRadius: 16, alignItems: 'center', margin: 20 }}
          onPress={() => logout()}
        >
          <Text style={{ ...styles.title, color: 'white' }}>Cerrar sesión</Text>
          <Icon name={'sign-out-alt'} size={20} color={'white'} />
        </TouchableOpacity>
      )}

    </View>
  );
};


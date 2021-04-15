import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../context/AuthContext';
import { colors, styles } from '../theme/appTheme';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();

  const context = useContext(AuthContext);

  const { authState } = context;

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: insets.top + 20,
    }}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text>
        {JSON.stringify(authState, null, 3)}
      </Text>
      {
        authState.favoriteIcon &&
        (
          <Icon name={authState.favoriteIcon} size={80} color={colors.airbnb} />
        )
      }

    </View>
  );
};


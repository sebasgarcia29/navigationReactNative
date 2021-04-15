import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, styles } from '../../theme/appTheme';

export const Tab1Screen = () => {

  const { top: marginTop } = useSafeAreaInsets();

  return (
    <View style={[styles.globalMargin, { marginTop }]}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airbnb" size={80} color={colors.airbnb} />;
        <Icon name="facebook" size={80} color={colors.facebook} />;
        <Icon name="instagram" size={80} color={colors.instagram} />;
        <Icon name="twitter" size={80} color={colors.twitter} />;
        <Icon name="facebook-messenger" size={80} color={colors.facebookMessenger} />;
        <Icon name="google-plus-g" size={80} color={colors.googlePlus} />;
        <Icon name="google" size={80} color={colors.googlePlus} />;
      </Text>
    </View>
  );
};

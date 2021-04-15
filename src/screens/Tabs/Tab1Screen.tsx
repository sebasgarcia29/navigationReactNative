import React from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../../components/TouchableIcon';
import { colors, styles } from '../../theme/appTheme';

export const Tab1Screen = () => {

  const { top: marginTop } = useSafeAreaInsets();

  return (
    <View style={[styles.globalMargin, { marginTop }]}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airbnb" color={colors.airbnb} />
        <TouchableIcon iconName="facebook" color={colors.facebook} />
        <TouchableIcon iconName="instagram" color={colors.instagram} />
        <TouchableIcon iconName="twitter" color={colors.twitter} />;
        <TouchableIcon iconName="facebook-messenger" color={colors.facebookMessenger} />
        <TouchableIcon iconName="google-plus-g" color={colors.googlePlus} />
        <TouchableIcon iconName="google" color={colors.googlePlus} />
      </Text>
    </View>
  );
};

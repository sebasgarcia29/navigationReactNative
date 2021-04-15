/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ChatScreen } from '../screens/TopTabScreens/ChatScreen';
import { ContactScreen } from '../screens/TopTabScreens/ContactScreen';
import { AlbumScreen } from '../screens/TopTabScreens/Albumscreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {

  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{
        paddingTop: top,
        elevation: 0,
        shadowColor: 'transparent',
      }}
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat': iconName = 'comments'; break;
            case 'Contact': iconName = 'id-badge'; break;
            case 'Albums': iconName = 'images'; break;
          }
          return (
            <Text>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumScreen} />
    </Tab.Navigator>
  );
};

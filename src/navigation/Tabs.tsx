/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Platform, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Tab1Screen } from '../screens/Tabs/Tab1Screen';
// import { Tab3Screen } from '../screens/Tabs/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { TopTapNavigator } from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <TabsIOS />
    : <TabsAndroid />;
};

const BottonTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottonTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colors.airbnb }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen': iconName = 'airbnb'; break;
            case 'TopTapNavigator': iconName = 'facebook'; break;
            case 'StackNavigator': iconName = 'instagram'; break;
          }
          return (
            <Text>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}
    >
      <BottonTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab1' }} />
      <BottonTabAndroid.Screen name="TopTapNavigator" component={TopTapNavigator} options={{ title: 'Tab2' }} />
      <BottonTabAndroid.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Tab3' }} />
    </BottonTabAndroid.Navigator>
  );
};

const BottonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        // activeBackgroundColor: 'blue',
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen': iconName = 'airbnb'; break;
            case 'TopTapNavigator': iconName = 'facebook'; break;
            case 'StackNavigator': iconName = 'instagram'; break;
          }
          return (
            <Text>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}
    >
      <BottonTabIOS.Screen
        name="Tab1Screen"
        component={Tab1Screen}
        options={{
          title: 'Tab1',
          // tabBarIcon: (props) => (<Text style={{ color: props.color, fontSize: 20 }}>T1</Text>),
        }}
      />
      <BottonTabIOS.Screen
        name="TopTapNavigator"
        component={TopTapNavigator}
        options={{ title: 'Tab2' }}
      />
      <BottonTabIOS.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={{ title: 'Tab3' }}
      />
    </BottonTabIOS.Navigator>
  );
};

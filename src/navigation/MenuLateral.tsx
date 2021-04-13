
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import {
  useWindowDimensions,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { styles } from '../theme/appTheme';
// import { createStackNavigator } from '@react-navigation/stack';
import { StackNavigator } from './StackNavigator';


const Drawer = createDrawerNavigator();

// const Stack = createStackNavigator();

// const SettignsStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="SettingsScreen"
//         component={SettingsScreen}
//       />
//     </Stack.Navigator>
//   );
// };

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <MenuInterno {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://i.pinimg.com/originals/8a/35/02/8a35028a3c0e7b7e3d2fe3ce418252e1.png' }}
        />
      </View>

      {/* Opciones de Menu */}
      <View style={styles.menuContainer}>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('StackNavigator')}
        >
          <Text style={styles.textMenu}>Navegacion Stack</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}
        >
          <Text style={styles.textMenu}>Ajustes</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
};

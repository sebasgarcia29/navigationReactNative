import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AuthContext } from '../context/AuthContext';


interface Props {
  iconName: string;
  color: string;
}

export const TouchableIcon = ({ iconName, color }: Props) => {

  const { changeFavoritaIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity
      onPress={() => changeFavoritaIcon(iconName)}
    >
      <Icon
        name={iconName}
        size={80}
        color={color}
      />
    </TouchableOpacity>
  );
};

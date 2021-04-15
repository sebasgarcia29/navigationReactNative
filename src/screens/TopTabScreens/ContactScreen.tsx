import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { styles } from '../../theme/appTheme';


export const ContactScreen = () => {

  const { authState, signIn } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contact Screen</Text>
      {!authState.isLoggedIn && (
        <Button
          title="SingIn"
          onPress={signIn}
        />
      )}

    </View>
  );
};


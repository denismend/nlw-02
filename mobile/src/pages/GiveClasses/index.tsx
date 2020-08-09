import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigationBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        style={styles.content} 
        resizeMode="contain"
        source={giveClassesBgImage}>
          <Text style={styles.title}>
            Quer ser um Proffy
          </Text>

          <Text style={styles.description}>
            Para começar, você precisar se cadastrar como Professor na nossa plataforma Web.
          </Text>

      </ImageBackground>

      <RectButton 
        onPress={handleNavigationBack} 
        style={styles.okButton}
      >
        <Text style={styles.okButtonText}>Todo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <PageHeader title="Meus proffys favoritos"/>
      </View>

      <ScrollView 
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
        style={styles.teacherList}
      >
        {favorites.map((favorite: Teacher) => {
          return (
            <TeacherItem 
              key={favorite.id} 
              teacher={favorite}
              favorited
            />
          );
        })}

      </ScrollView>
    </View>
  )
};

export default Favorites;
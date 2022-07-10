import React from 'react';
import {
   StyleSheet,
   FlatList,
   ScrollView
 } from 'react-native';
import Burgers from '../Utils/Burgers';
import FoodItem from './FoodItem';
 
 const FoodMenu = () => {
  const renderItem = ({ item }) => (
    <FoodItem imagePath={item.imagePath} name={item.name} price={item.price} time={item.time} />
  );
    return (
      <ScrollView horizontal  showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <FlatList
        numColumns={2}
        data={Burgers}
        horizontal={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        style={styles.listItems}
        scrollEnabled
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
    );
 }
 const styles = StyleSheet.create({
  scroll: {
    height: 250,
    flexWrap: 'nowrap',
  },
   list: {
     flexGrow: 0,
     margin: 10,
     alignSelf: 'center',
     justifyContent: 'center',
     alignItems: 'center',
     textAlign: 'center',
     
   },
   listItems: {
     marginLeft: 20,
     marginRight: 20
   }
 });
 export default FoodMenu;

import React from 'react';
import {
   StyleSheet,
   FlatList
 } from 'react-native';
import Burgers from '../Utils/Burgers';
import FoodItem from './FoodItem';
 
 const FoodMenu = () => {
  const renderItem = ({ item }) => (
    <FoodItem imagePath={item.imagePath} name={item.name} price={item.price} time={item.time} />
  );
    return (
      <FlatList
      numColumns={2}
      data={Burgers}
      horizontal={false}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      style={styles.listItems}
    />
    );
 }
 const styles = StyleSheet.create({
   list: {
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

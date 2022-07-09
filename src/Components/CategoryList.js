import React from 'react';
import {
   View, 
   StyleSheet, 
 } from 'react-native';
 import Category from './Category';
 import Categories from '../Utils/Categories';
 
 const CategoryList = () => {
  return Categories && Categories.map((data, index) => { 
    return (
            <View style={styles.categories} key={index}> 
                <Category isActive={data.isActive} imagePath={data.imagePath} name={data.name} />
            </View>
    );
  }
  )
 }
 const styles = StyleSheet.create({
   categories: {
      flexDirection: 'column',
   }
 });
 export default CategoryList;

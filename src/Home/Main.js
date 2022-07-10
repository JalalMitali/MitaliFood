import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView
 } from 'react-native';
import Ad from '../Components/Ad';
import CategoryList from '../Components/CategoryList';
import FoodMenu from '../Components/FoodMenu';
import SearchBar from '../Components/SearchBar';
 
 
 const Main = () => {
   return (
        <View style={styles.container}>
            <Ad />
            <SearchBar />
            <ScrollView style={{ flexDirection: 'row', height: 120, }} horizontal showsHorizontalScrollIndicator={false}>
              <CategoryList />
            </ScrollView>
            <FoodMenu />
        </View>
   );
 }
 const styles = StyleSheet.create({
   container: {

   }
 });
 export default Main;

import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView
 } from 'react-native';
import Ad from '../Components/Ad';
import AppBar from '../Components/AppBar';
import BottomBar from '../Components/BottomBar';
import CategoryList from '../Components/CategoryList';
import FoodMenu from '../Components/FoodMenu';
import SearchBar from '../Components/SearchBar';
 
 
 const Main = () => {
   return (
        <View style={styles.container}>
            <AppBar />
            <Ad />
            <SearchBar />
            <ScrollView style={{ flexDirection: 'row', height: 120, }} horizontal showsHorizontalScrollIndicator={false}>
              <CategoryList />
            </ScrollView>
            <FoodMenu />
            <BottomBar />
        </View>
   );
 }
 const styles = StyleSheet.create({
   container: {

   }
 });
 export default Main;

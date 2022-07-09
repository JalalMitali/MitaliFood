import React from 'react';
import {
   View, 
   StyleSheet,
   Image,
   Text,
 } from 'react-native';
import Colors from '../Utils/Colors';

 const FoodItem = ({imagePath, name, price, time}) => {

    return (
                
               <View style={styles.singleFoodItem}>
                  <Image source={imagePath} style={styles.imageItem} />
                   <Text style={styles.foodName}>{name}</Text>
                   <Text style={styles.foodPrice}>{price} USD</Text> 
                   <Text style={styles.deliveryTime}>{time} Mins - Delivery</Text>
               </View>
        );
}
 const styles = StyleSheet.create({
    singleFoodItem: {
        backgroundColor: Colors.white,
      color: Colors.white,
      flexDirection: 'column',
      borderRadius: 10,
      margin: 10,
      height: 150,
      width: 150,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignItems: 'center'
   },
   imageItem: {
       width: 75,
       height: 75,
       borderRadius: 30
   },
   foodPrice: {
    color: Colors.Black,
   },
   foodName: {
       color: Colors.Orange,
    },
    deliveryTime: {
        color: Colors.Burger,
    },
 });
 export default FoodItem;

import React from 'react';
import {
   View, 
   StyleSheet,
   Image,
   Text,
   TouchableOpacity
 } from 'react-native';
import Colors from '../Utils/Colors';

 const Category = ({imagePath, name, isActive}) => {
    state = {
       isActive: isActive,
    }
    return (
                
               <View style={this.state.isActive ? styles.activeCategory : styles.singleCategory}>
                  <Image source={imagePath} style={this.state.isActive ? styles.imageActive : styles.image} />
                  <TouchableOpacity onPress={{}} style={styles.opacity}>
                   <Text style={this.state.isActive ? styles.textActive : styles.imageText}>{name}</Text>
                  </TouchableOpacity>
               </View>
        );
}
 const styles = StyleSheet.create({
    singleCategory: {
      color: Colors.white,
      flexDirection: 'column',
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      marginRight: 10,
      marginLeft: 10,
      height: 110,
      width: 100,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center'
   },
   imageText: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color: Colors.white,
      width: 100,
      backgroundColor: Colors.Black
    },
    image: {
         borderRadius: 5,
         width: 100,
         height: 100,
    },
    activeCategory: {
      color: Colors.white,
      resizeMode: 'contain',
      flexDirection: 'column',
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      marginRight: 10,
      marginLeft: 10,
      height: 110,
      width: 100,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageActive: {
      borderRadius: 5,
      width: 100,
      height: 100,
    },
    textActive: {
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color: Colors.white,
      borderRadius: 20,
      width: 100,
      backgroundColor: Colors.Burger
    },
    opacity: {
      borderRadius: 30,
    }
 });
 export default Category;

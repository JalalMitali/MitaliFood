import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import AppBar from './src/Components/AppBar';
import BottomBar from './src/Components/BottomBar';
import Main from './src/Home/Main';
import Colors from './src/Utils/Colors';


const App = () => {
  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.areaView}>
      <AppBar />
        <Main />
      </SafeAreaView>
    <BottomBar />
    </View>
  );
}
const styles = StyleSheet.create({
  areaView: {
    
  },
  appContainer: {
    flex: 1,
    backgroundColor: Colors.background
  }
});
export default App;

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Main from './src/Home/Main';
import Colors from './src/Utils/Colors';


const App = () => {
  return (
    <SafeAreaView style={styles.areaView}>
      <Main />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: Colors.background,
  }
});
export default App;

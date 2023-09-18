import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from 'react-native';



export default function App() {
  return (
  <>
  {/* In marginTop - StatusBar.currentHeight is for Safe area view for Android */}
  <SafeAreaView style={{ flex:1, marginTop: StatusBar.currentHeight }}> 

    <View style={styles.search}>
      <Text>search</Text>
    </View>
    
    <View style={styles.list}>
      <Text>list</Text>
    </View>                          

  </SafeAreaView>

  <ExpoStatusBar style="auto" />
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',

  },
  search: {
    
    backgroundColor: 'green',
    padding: 25,
  },
  list: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 25,
    
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import './css/App.css'; 

import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import NavBar from './components/NavBar';

const PlaceholderImage = require('./assets/images/placeholder-woman.jpg');

export default function App() {
  return (
    <View>
      <NavBar />
      <View>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View>
        <Button label="A button" />
        <Button label="Another button" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FAF3F1',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     flex: 1,
//     paddingTop: 58,
//     paddingBottom: 58,
//   },
//   footerContainer: {
//     flex: 1 / 3,
//     alignItems: 'center',
//   },
// });

//Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
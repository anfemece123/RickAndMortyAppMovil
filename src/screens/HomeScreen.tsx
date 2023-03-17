import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import useCharacters from '../hooks/useCharacters';
import Carousel from 'react-native-snap-carousel';
import CharacterPoster from '../components/CharacterPoster';

const {width: windowWidth} = Dimensions.get('window');
const HomeScreen = () => {
  const {characters, loading} = useCharacters();
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="black" size={100} />
      </View>
    );
  }
  return (
    <View style={styles.homeContainer}>
      <Image
        style={styles.title}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png',
        }}
      />
      <View
        style={{
          height: 500,
        }}>
        <Carousel
          data={characters}
          renderItem={({index}: any) => <CharacterPoster character={index} />}
          sliderWidth={windowWidth}
          itemWidth={300}
          inactiveSlideOpacity={0.9}
          inactiveSlideScale={0.8}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: '#272b34',
    flexDirection: 'column',
  },
  title: {
    width: '100%',
    height: 120,
    marginVertical: 40,
  },
});

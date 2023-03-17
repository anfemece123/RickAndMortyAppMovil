import {Text, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useCharacters from '../hooks/useCharacters';
import {useNavigation} from '@react-navigation/native';

interface Props {
  character: number;
}
type Nav = {
  navigate: (value: string, character: number) => void;
};

const CharacterPoster = ({character}: Props) => {
  const {navigate} = useNavigation<Nav>();
  const {characters} = useCharacters();

  return (
    <TouchableOpacity
      onPress={() => navigate('DetailScreen', character)}
      activeOpacity={0.8}
      style={styles.container}>
      <Image
        source={{uri: characters[character]?.image}}
        style={styles.image}
      />
      <View style={styles.containerText}>
        <Text style={styles.textName}>{characters[character]?.name}</Text>
        <Text style={styles.textStatus}>{characters[character]?.species}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3e43',
    width: '100%',
    borderWidth: 3,
    borderColor: '#bfff00',
    borderRadius: 40,
  },
  image: {
    width: '100%',
    height: 380,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  containerText: {
    marginVertical: 12,
    alignItems: 'center',
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily: 'verdana',
    color: 'white',
  },

  textStatus: {
    color: '#959796',
    marginLeft: 5,
    fontSize: 18,
  },
});

export default CharacterPoster;

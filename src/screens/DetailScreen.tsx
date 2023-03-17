import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import useCharactersId from '../hooks/useCharactersId';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = ({route}: any) => {
  const characterId = route.params + 1;

  const {loading, image, name, status, species, gender, origin, location} =
    useCharactersId(characterId);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="white" size={100} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{name}</Text>
        {status === 'Alive' ? (
          <View style={styles.statusContainer}>
            <Icon name="happy" size={15} color="#51cb41" />
            <Text style={styles.textStatus}>
              {status} - {species}
            </Text>
          </View>
        ) : (
          <View style={styles.statusContainer}>
            <Icon name="sad" size={15} color="red" />
            <Text style={styles.textStatus}>
              {status} - {species}
            </Text>
          </View>
        )}
        <View style={styles.genderContainer}>
          <Text style={styles.textGenderTitle}>Gender:</Text>
          <Text style={styles.textGender}>{gender}</Text>
        </View>
        <View style={styles.genderContainer}>
          <Text style={styles.textGenderTitle}>Origin:</Text>
          <Text style={styles.textGender}>
            {origin?.name}({location?.name})
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272b34',
  },
  image: {
    width: '100%',
    height: screenHeight * 0.6,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  textContainer: {
    marginVertical: 20,
    marginLeft: 20,
  },
  textName: {
    fontFamily: 'Righteous',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  statusContainer: {flexDirection: 'row'},
  textStatus: {
    color: 'white',
    marginLeft: 5,
    fontSize: 15,
  },
  genderContainer: {
    marginTop: 15,
  },
  textGender: {
    color: 'white',
    marginLeft: 5,
    fontSize: 23,
  },
  textGenderTitle: {
    color: '#959796',
    fontSize: 20,
  },
});

export default DetailScreen;

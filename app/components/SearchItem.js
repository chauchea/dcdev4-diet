import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default SearchItem = ({aliment, navigation, route, repas}) => {

  //console.log(repas)

  return (
    <View style={styles.containerItem}>
      <Text style={styles.TextItem}>{aliment.food_name}</Text>
      <TouchableOpacity
      title="+"
      color="#f88c19"
      style={{
        backgroundColor: '#f88c19',
        borderColor: '#f88c19',
        borderRadius: 50,
        height: 25,
        width: 20
      }}
      onPress={() => navigation.navigate('AUJOURD\'HUI', {food_name: aliment.food_name, repas: repas})}
      >
        <Text style={{
          color: 'white',
          marginTop: 2,
          textAlign: 'center',
        }}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    padding: 20,
    flexDirection: "row",

  },
  TextItem: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f88c19',
    width: '95%',
  },
})
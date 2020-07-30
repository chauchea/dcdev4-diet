import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Button,
  SafeAreaView,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchItem from '../components/SearchItem';
import { TextInput } from 'react-native-gesture-handler';

export default AlimentScreen = ({navigation, route}) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchList, setSearchList] = useState([]);
  

  const query = 'https://trackapi.nutritionix.com/v2/search/instant?query=';
  const oneQuery = query.concat(searchInput);

  

  const getResults = async () => {
    let response = await fetch(oneQuery, {
        method: 'GET',
        headers: {
          'x-app-id': '479db5c5',
          'x-app-key': '3525e9b858f63b1dc25625837ef85914'
        }
      }
      );
    let jsonResponse = await response.json(); {
      //if (jsonResponse.common) {
      setSearchList(jsonResponse.common)
    //}
    }
    
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.taskInputContainer}>
        <TextInput 
          style={styles.TextInput}
          placeholder="Rechercher un aliment"
          onChangeText={setSearchInput}
          value={searchInput}
        />
        <Button
          color="#f88c19"
          title="+"
          onPress={() => getResults()}
        />
      </View>
      <FlatList
        data={searchList}
        renderItem={({item}) => <SearchItem  repas={route.params.repas} aliment={item} navigation={navigation}/>}
        keyExtractor={item => item.food_name}
      />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#bcbcbc',
    borderColor: '#bcbcbc',
    borderWidth: 1,
    color: 'white',
    height: 40, 
    opacity: 0.8,
    width: '90%',
    borderRadius: 5,
  },
  taskInputContainer: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    padding: 10
  }
})
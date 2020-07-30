import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Button,
} from 'react-native';
import ListItem from '../components/ListItem'
import AsyncStorage from '@react-native-community/async-storage';


export default HomeScreen = ({navigation, route}) => {

  const [foodBreakfast, setFoodBreakfast] = useState([]);
  const [foodBrunch, setFoodBrunch] = useState([]);
  const [foodLunch, setFoodLunch] = useState([]);
  const aliments = [foodBreakfast + foodBrunch + foodLunch]


  const restoreBreakfastFromAsyncStorage = async () => {
    try {
      const localStorageBreakfast = await AsyncStorage.getItem('foodBreakfast');
      return localStorageBreakfast != null ? setFoodBreakfast(JSON.parse(localStorageBreakfast)) : null;
    } catch (error) {
      
    }
  };


  const restoreBrunchFromAsyncStorage = async () => {
    try {
      const localStorageBrunch = await AsyncStorage.getItem('foodBrunch');
      return localStorageBrunch != null ? setFoodBrunch(JSON.parse(localStorageBrunch)) : null;
    } catch (error) {
      
    }
  };


  const restoreLunchFromAsyncStorage = async () => {
    try {
      const localStorageLunch = await AsyncStorage.getItem('foodLunch');
      return localStorageLunch != null ? setFoodLunch(JSON.parse(localStorageLunch)) : null;
    } catch (error) {
      
    }
  };
  
  useEffect( () => {
    restoreBreakfastFromAsyncStorage();
    restoreBrunchFromAsyncStorage();
    restoreLunchFromAsyncStorage();
  }, [])

  useEffect( () => {
    
    if (route.params) {
    

      switch(route.params.repas) {

        case 'breakfast':
          let newBreakfast;
          newBreakfast = [...foodBreakfast, {
            title: route.params.food_name,
            id: 'id'+route.params.food_name
          }];
          setFoodBreakfast(newBreakfast);
          AsyncStorage.setItem('foodBreakfast', JSON.stringify(newBreakfast));
          break;


        case 'brunch':
          let newBrunch;
          newBrunch = [...foodBrunch, {
            title: route.params.food_name,
            id: 'id'+route.params.food_name
          }];
          setFoodBrunch(newBrunch);
          AsyncStorage.setItem('foodBrunch', JSON.stringify(newBrunch));
          break;


        case 'lunch':
          let newLunch;
          newLunch = [...foodLunch, {
            title: route.params.food_name,
            id: 'id'+route.params.food_name
          }];
          setFoodLunch(newLunch);
          AsyncStorage.setItem('foodLunch', JSON.stringify(newLunch));
          break;


        default:
          break;
      };
    } 
  }, [route.params])
  

  const actionFood = () => {
    try{
      let deleteBreakfast = [...foodBreakfast];
      let deleteBrunch = [...foodBrunch];
      let deleteLunch = [...foodLunch];
      switch (repas) {
        case 'breakfast':
          deleteBreakfast = aliments.filter(({food_name}) => food_name !== aliments.food_name);
          setFoodBreakfast(deleteBreakfast)
          AsyncStorage.setItem('foodBreakfast', JSON.stringify(newLunch));
          break;
        case 'brunch':
          deleteBrunch = aliments.filter(({food_name}) => food_name !== aliments.food_name);
          setFoodBrunch(deleteBrunch)
          AsyncStorage.setItem('foodBrunch', JSON.stringify(newLunch));
          break;
        case 'lunch':
          deleteLunch = aliments.filter(({food_name}) => food_name !== aliments.food_name);
          setFoodLunch(deleteLunch)
          AsyncStorage.setItem('foodLunch', JSON.stringify(newLunch));
          break;
        default:
      }
    } catch (error) {
      //console.log(error);
    }
  } 


  return (
    <>
      <View style={styles.container}> 
        <Text style={styles.containerTitle}>Petit Déjeuner</Text>
        <Button 
          title="+" 
          color='#f88c19' 
          opacity={0.8}
          onPress={() => navigation.navigate('AJOUTER UN ALIMENT', {repas: 'breakfast'})}
        />
      </View>

      
      <View>
        <FlatList
        data={foodBreakfast}
        renderItem={({item}) => <ListItem removeaction={actionFood()} repas={{repas: 'breakfast'}} aliment={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        />
      </View>


      <View style={styles.container}>
        <Text style={styles.containerTitle}>Déjeuner</Text>
        <Button navigation={navigation} title="+" color='#f88c19' onPress={() => navigation.navigate('AJOUTER UN ALIMENT', {repas: 'brunch'})}/>
      </View>


      <View>
        <FlatList
        data={foodBrunch}
        renderItem={({item}) => <ListItem removeaction={actionFood()} repas={{repas: 'brunch'}} aliment={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        />
      </View>


      <View style={styles.container}>
        <Text style={styles.containerTitle}>Dîner</Text>
        <Button navigation={navigation} title="+" color='#f88c19' onPress={() => navigation.navigate('AJOUTER UN ALIMENT', {repas: 'lunch'})}/>
      </View>


      <View>
        <FlatList
        data={foodLunch}
        renderItem={({item}) => <ListItem removeaction={actionFood()} repas={{repas: 'lunch'}} aliment={item} navigation={navigation}/>}
        keyExtractor={item => item.id}
        />
      </View>


      <View style={styles.container}>
        <Text style={styles.containerTitle2}>Résumé</Text>
      </View>
    </>
      
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: '#f88c19',
    backgroundColor: 'white',
    opacity: 0.8
  },
  containerTitle: {
    height: 40,
    width: '95%',
    color: '#f88c19',
    paddingTop: 8
  },
  containerTitle2: {
    height: 40,
    width: '100%',
    color: '#f88c19',
    paddingTop: 8
  }
});
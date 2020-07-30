import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default ListItem = ({repas, aliment}) => {



  return (
    <View style={styles.containerItem}>
      <Text style={styles.TextItem}>{aliment.title}</Text>
      <TouchableOpacity
      style={{
        backgroundColor: 'red',
        borderColor: 'red',
        borderRadius: 50,
        height: 25,
        width: 25
      }}
      onPress={() => props.removeAction(props, {repas: repas})}
      >
        <Text style={{
          color: 'white',
          marginTop: 2,
          textAlign: 'center',
        }}>X</Text>
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
    marginBottom: 15,
    color: '#f88c19',
    width: '95%'
  },
})
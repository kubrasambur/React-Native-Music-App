import { StyleSheet, Text, View , TextInput} from 'react-native';
import React from 'react';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='Search Song' onChangeText={props.onChange}></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#D2D9DD",
        margin:5,
        borderRadius:5,
        
    }
});

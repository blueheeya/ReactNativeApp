import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const TodoInput = ({onChangeText, todoText}) => {
  const onChangeInput = text =>{
    onChangeText(text);
  }
  return (
    <TextInput style={styles.todoInput} onChangeText={onChangeInput} maxLength={20} autoCapitalize='none' value={todoText}></TextInput>
  )
}

export default TodoInput

const styles = StyleSheet.create({
    todoInput:{flex:1,borderWidth:1, backgroundColor:'#e5e5e5', borderColor:'#c5c5c5', borderRadius:10, padding:10 ,}
})
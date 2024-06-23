import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Task = ({item, deleteTask, checkCompleted, updateTask}) => {
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState(item.text)

    const _onSubmit =() =>{
        if(isEditing){
            setIsEditing(false)
            updateTask(item.id,text)
        }
    }
  return isEditing ?  (
    <>
    <TextInput style={styles.editInput} onChangeText={text=>setText(text)}  value={text} onSubmitEditing={_onSubmit} onBlur={_onSubmit} autoFocus={true} />
    </>) :(
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-between', gap:10}}>
                <View>
                    { item.completed ? (<TouchableOpacity onPress={()=> checkCompleted(item.id)}><AntDesign name='checksquare' style={{fontSize:20, color: '#4751cc'}} /></TouchableOpacity>):
                    (<TouchableOpacity onPress={()=> checkCompleted(item.id)}><AntDesign name='checksquareo' style={{fontSize:20, color: '#d5d5d5'}} /></TouchableOpacity>) }
                    
                </View>
                {/* <AntDesign name='checksquare' style={{fontSize:20, color: '#4751cc'}} />
                <AntDesign name='checksquareo' style={{fontSize:20, color: '#d5d5d5'}} /> */}
                <Text>{item.text}</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', gap:10}}>
                {item.completed || <TouchableOpacity onPress={()=> setIsEditing(true)}><Feather name='edit' style={{fontSize:20}} /></TouchableOpacity>}
                <TouchableOpacity onPress={()=>deleteTask(item.id)}><AntDesign name='delete' style={{fontSize:20}} onPress={()=>deleteTask(item.id)} /></TouchableOpacity>
            </View>
        </View>
  )
}

export default Task

const styles = StyleSheet.create({
    container :{flexDirection:'row', justifyContent:'space-between', borderWidth: 1, borderBottomWidth:2,borderColor:'#e6e6e6', borderRadius:5, padding:16, marginBottom:10},
    editInput :{ borderWidth: 1, borderBottomWidth:2,borderColor:'#e6e6e6',borderRadius:5, padding:16, marginBottom:10}
})
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Task from './page/components/Task';
import TodoInput from './page/components/TodoInput';

const App = () => {
const teamData =[
    {id:'1', text:'react-native', completed:false},
    {id:'2', text:'spring boot', completed:true},
    {id:'3', text:'java', completed:false},
];
const [todos, setTodos] = useState(teamData);
const [todoText,setTodoText] = useState('');

const onChangeText =(text: string) =>{
    setTodoText(text)
}

//add
const addTodo = () => {
    if(todoText.trim()){
      // Alert.alert('add');
      const ID = Date.now().toString();
      const newTaskObject = {id:ID,text:todoText,completed:false}
      console.log(newTaskObject)
      setTodos([...todos,newTaskObject])
      setTodoText('')
    }

  };
//check
const checkCompleted = (itemId:string) =>{
    setTodos (todos.map((item)=> item.id === itemId ? {...item,completed : !item.completed} : item))
}
//delete
const deleteTask = (itemId:string) =>{
    setTodos(todos.filter((task)=>task.id != itemId))
}
//update
const updateTask = (itemId:string) =>{
    setTodos(todos.map((item)=>item.id === itemId ? {...item, text:newText}:item))
}
return (
    <SafeAreaView>
    <LinearGradient colors={['#4595EA','#4751CC']} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
locations={[0,0.5,0.6]} angle={90} angleCenter={{x:0.25,y:0.5}} style={styles.header}>
        <Text style={styles.title}>Dorothy's Todo List</Text>
    </LinearGradient>
    <View style={styles.searchWrap}>
        <View style={styles.inputWrap}>
            <TodoInput onChangeText={onChangeText} todoText={todoText} />
            {/* <Button title='todoup' onPress={addTodo} /> */}
            <TouchableOpacity onPress={addTodo} >
                <LinearGradient colors={['#4595EA','#4751CC']} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
                locations={[0,0.5,0.6]} angle={90} angleCenter={{x:0.25,y:0.5}} style={styles.addButton}>
                <Text style={styles.addButtonText}><AntDesign name='enter' style={{fontSize:20,fontWeight:'bold'}} /></Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.container}>
        <View>
            {
                [...todos].reverse().map((item,idx) =>{
                    return (
                        <Task deleteTask={deleteTask} checkCompleted={checkCompleted} updateTask={updateTask} key={idx} item={item} />
                    )
                })
            }
        </View>
    </ScrollView>
    </View>
    </SafeAreaView>
    
)
}

export default App

const styles = StyleSheet.create({
    header:{backgroundColor:'#4595EA',padding: 16},
    title:{textAlign:"center",fontSize:24, color:'white',fontWeight:'bold'},
    container : {backgroundColor:'white'},
    searchWrap: {paddingHorizontal:16,paddingVertical:16,backgroundColor:'white'},
    inputWrap :{width:'100%', height: 50,flexDirection:'row',justifyContent:'space-between',gap:10, marginBottom: 16},
    addButton : {flexDirection:'row', justifyContent:'center', alignItems:'center', width: 50, height:'100%',borderRadius:5},
    addButtonText : {color:'white',textAlign:'center',fontWeight:'bold',fontSize:18}
})
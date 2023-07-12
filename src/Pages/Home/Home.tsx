import { View, Text, TouchableOpacity, FlatList, TextInput, Alert, Image  } from "react-native";
import React, {useState, useContext} from "react";
import {styles} from './styles'
import {Feather} from '@expo/vector-icons'
import { List } from "../../Components/List/List";
import logo from '../../assets/Logo.png'


export function Home(){
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState<string[]>([])
    const [created, setCreated] = useState(0)
    const [completed, setCompleted] = useState(0)

    function clearField(){
        setTodo("")
    }
    function addTodoCountCreated(){
        setCreated(prevState => prevState + 1)
    }

    function addTodoCountCompleted(){
        setCompleted(prevState => prevState + 1)
    }

    function todoAdd(){
        if(todoList.includes(todo)){
            return Alert.alert("Tarefa existe", "essa tarefa ja existe ou ja foi concluida")
        }
        
        if(todo.trim() === ""){
            return Alert.alert("Escreva uma Tarefa", "por favor adicione/escreva uma tarefa ")

        }

        setTodoList( prevList => [...prevList, todo])
        clearField()
        addTodoCountCreated()
        
    }

    function removerTarefa(item: string){
        Alert.alert("Remover", 'Deseja Excluir essa tarefa?', [
            {
                text: 'sim',
                onPress: () => setTodoList(prevList => prevList.filter(todoList => todoList !== item  ))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return(
        //Header
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={logo}/>
            </View>
        {/** Input */}
            <View style={styles.contentInput}>
            <TextInput 
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#6b6b6b"
                onChangeText={setTodo}
                value={todo}
                >
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={todoAdd}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            {/**Count */}
            <View style={styles.containerCount}>
                <View style={styles.content}>
                    <Text style={styles.create}>Criadas</Text>
                    <View style={styles.number}>
                        <Text style={styles.count}>{created}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.finished}>Concluidas</Text>
                    <View style={styles.number}>
                        <Text style={styles.count}>{completed}</Text>
                    </View>
                </View>
            </View>
            {/** List */}
            <View style={styles.containerEmpty}>
            <FlatList
                data={todoList}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <List
                    handleCompleted={addTodoCountCompleted}
                    key={item}
                    tarefa={item}
                    onRemove={() => removerTarefa(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.contentEmpty}>
                        <Feather name="clipboard" size={45} color="#333333"/>
                        <Text style={styles.bold}>
                            Você ainda não tem tarefas cadastradas
                        </Text>
                        <Text style={styles.text}>
                            Crie tarefas e organize seus itens a fazer
                        </Text>
                    </View>
                )}
            />
        </View>
        </View>
    )
}
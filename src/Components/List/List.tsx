import { View, Text, TouchableOpacity,} from "react-native";
import React, {useState} from "react";
import {styles} from './styles'
import { CheckBox } from "react-native-elements";
import {Feather} from '@expo/vector-icons';



type Props = {
    tarefa: string
    onRemove: () => void
    handleCompleted: () => void
    
}

export function List({tarefa, onRemove, handleCompleted }: Props){
    const [isSelected, setSelection] = useState(false);

    function onCompleted(){
        setSelection(true)
        handleCompleted()
    }

    return(
        <View style={styles.container}>
            <View style={styles.check}>

                    <CheckBox
                    checkedIcon="check"
                    checkedColor="purple"
                    uncheckedColor="grey"
                    disabled={isSelected}
                
                    checked={isSelected}
                    onPress={onCompleted}
                    />

            </View>
            <View style={styles.todo}>
                <Text numberOfLines={2} style={styles.text}>
                    {tarefa}
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.delete} onPress={onRemove}>
                    <Feather name="trash-2" size={20} color="#808080"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
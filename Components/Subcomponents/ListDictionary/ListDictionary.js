import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';
import ItemWord from './../ItemWord/ItemWord';

import palabras from '../../../diccionario';


export default class ListDictionary extends Component{
    constructor(props){
        super(props);
    }
    
    render(){    
        return(
            <View style={styles.Lista}>
                <FlatList
                    data={palabras}
                    renderItem={({item}) => 
                            <ItemWord  palabra={item.palabra} descripcion={item.descripcion}/>                        
                    }
                    keyExtractor={ item => item.id}
                /> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Lista:{
        flex: 6,
        backgroundColor: 'rgb(240, 255, 240)'     
    }
})

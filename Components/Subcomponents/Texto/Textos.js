import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';


function MyText(props){
    return(
        <Text style={style.texto}>{props.children}</Text>
    )
}

function MyTitle(props){
    return(
        <Text style={style.h1}>{props.children}</Text>
    )
}

const style = StyleSheet.create({
    texto:{
        fontSize:15,
        color:'#222',
        borderBottomWidth:0.4,
        borderBottomColor:'rgb(20, 116, 244)',
        borderBottomRightRadius: 7,
        fontFamily:'Arial, Helvitca, sans-sariff'        
    },
    h1:{        
        fontSize:24,
        color: '#fff',
        fontFamily:'Arial, Helvitca, sans-sariff'
    }
});

export {MyText, MyTitle}
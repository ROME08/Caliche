import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {MyText, MyTitle} from './../Texto/Textos';

export default class MyHeader extends Component {
    constructor(props){
        super(props);
        this.state = {clicked : false}
    }

    onPress = () =>{
        this.setState({
            clicked: true
        })
    }

    render(){

        return(
            <View style={estilo.headerContainer}>            
                {/* <View style={estilo.headerNav}>
                    <TouchableOpacity onPress={this.onPress}>
                        <Image style={estilo.imgMenu} source={require('../../../recursos/menu.png')} />
                    </TouchableOpacity>
                </View>             */}
                <View style={estilo.headerTitulo}>
                    <MyTitle>Caliche</MyTitle>
                </View>            
                {/* <View style={estilo.headerBuscador}>
                <TouchableOpacity onPress={this.onPress}>
                        <Image style={estilo.imgMenu} source={require('../../../recursos/lupa.png')} />
                    </TouchableOpacity>
                </View>             */}
            </View>
        )
    }    
}

const estilo = StyleSheet.create({
    headerContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',  
        marginBottom:1,
        backgroundColor: 'rgb(20, 116, 244)',
        borderBottomStartRadius:4,
        borderBottomEndRadius:4

    },
    headerNav:{
        flex:1,
        flexDirection:'column', 
        alignItems:'flex-start',
        marginLeft:15             
    },
    headerTitulo:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    },
    headerBuscador:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-end',
        marginRight: 15
    },
    imgMenu:{
        width: 35,
        height: 28,
    }
})
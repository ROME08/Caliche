import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Definitions from './../Definitions/Definitions';
import {MyText} from './../Texto/Textos';

export default class ItemWord extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.item}>
                <MyText>
                    {this.props.palabra}                                                                                          
                </MyText>                
                <Definitions significados={this.props.descripcion}/>                      
            </View>            
        );
    }
}

//<Text style={{color:'#777', fontSize:10, fontStyle:'italic'}}>{this.props.descripcion}</Text>

const styles = StyleSheet.create({
  item:{
    marginBottom:1.2,
    marginHorizontal:1.5,
    paddingTop:8,
    paddingLeft:5,
    borderColor:'rgb(20, 116, 244)',
    borderWidth:1,
    borderRadius: 8
  }
})
import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';

export default class Definitions extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1
        }       
    }
    

    render(){        
        return(
            <FlatList
                data={this.props.significados}
                extraData={this.state}
                renderItem ={ ({item}) =>                
                <View style={{flex:1, flexDirection:'column'}}>
                    <Index number={item.id} tipo={item.tipo}></Index>                        
                    <Text style={{color:'#222', fontSize:14, paddingHorizontal:10}}>{item.significado}</Text>                                                                   
                </View>
                }                
                keyExtractor={ item => item.id}                                 
            />                            
        )
    }
}


function Index(props){
    var index = "";
    switch(props.number){
        case '1':
            index = 'a) ';
            break;
        case '2':
            index = 'b) ';
            break;
        case '3':
            index = 'c) ';
            break;
        case '4':
            index = 'd) ';
            break;
        case '5':
            index = 'e) ';
            break;
        default :
            index = 'a) ';
            break;
    }
    return(
    <Text style={{margin:0, padding:0, color:'#555' , fontSize:12, fontStyle:'italic', textAlign:'left'}}>{index}{props.tipo}</Text>        
    )
}
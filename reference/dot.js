import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'

export default class App extends Component{

    constructor(props){
        this.state = {}
        this.state.customStyles = {
            color: '#000'
        }

        setInterval(()=>{
            if(this.state.customStyles.color == '#000'){ 
                this.setState({
                    customStyles:{
                        color: '#aaa'
                    }
                })
            }else{
                this.setState({
                    customStyles:{
                        color: '#aaa'
                    }
                })
            }
        }, 1000)
    }

    render(){
        return (
            <View>
                <Text style={[styles.text, this.state.customStyles]}>

                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        font: 30,
        color: '#aaa'
    }
})
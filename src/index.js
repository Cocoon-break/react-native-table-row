/**
 * Created by cocoon-break on 16/8/10.
 */
'use strict'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
    View
} from 'react-native';
const screen = Dimensions.get('window')
const screenHeight = screen.height
const screenWidth = screen.width

class TableView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <View style={[this.props.style]}>
            {this.props.children}
        </View>
    }
}

TableView.TableCell = (props)=> {
    const isPressAble = props.onPress ? true : false

    let renderCell = ()=> {
        let cell = <View style={[styles.cellStyle,props.style]}>
            <Text style={[styles.titleStyle,props.titleStyle]}>{props.title}</Text>
            <Text style={[styles.subtitleStyle,props.subtitleStyle]}>{props.subtitle}</Text>
        </View>
        cell = isPressAble ? <TouchableHighlight onPress={props.onPress}
                                                 underlayColor={props.underlayColor}>{cell}</TouchableHighlight> : cell
        return cell
    }

    return <View>
        {renderCell()}
    </View>
}

const styles = StyleSheet.create({
    cellStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        width: screenWidth,
        backgroundColor: 'white',
        borderBottomColor:'#ccc',
        borderBottomWidth:StyleSheet.hairlineWidth
    },
    titleStyle:{
        fontSize:16,
        flex:1
    },
    subtitleStyle:{
        fontSize:14
    }
})

export default TableView
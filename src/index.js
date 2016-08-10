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
    View,
    Image
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

TableView.TableRow = (props)=> {
    const isPressAble = props.onPress ? true : false
    const showArrow = props.showArrow ? true : false
    const rightIconSource = props.rightIconSource ? props.rightIconSource : require('./list_arrow.png')
    const subElement = props.subElement ? props.subElement :
        <Text style={[styles.subtitleStyle,props.subtitleStyle]}>{props.subtitle}</Text>
    const titleElement = props.titleElement ? props.titleElement :
        <Text style={[styles.titleStyle,props.titleStyle]}>{props.title}</Text>

    let renderCell = ()=> {
        let cell = <View style={[styles.cellStyle,props.style]}>
            {titleElement}
            {subElement}
            {showArrow ? <Image source={rightIconSource} style={{marginLeft:4}}></Image> : null}
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
        borderBottomColor: '#ccc',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    titleStyle: {
        fontSize: 16,
        flex: 1
    },
    subtitleStyle: {
        fontSize: 14
    }
})

export default TableView
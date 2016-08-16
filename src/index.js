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

class TableRow extends Component {
    constructor(props) {
        super(props)
        this.renderTableRow = this.renderTableRow.bind(this)
        this.Basic = this.Basic.bind(this)
    }

    static defaultProps = {
        type: 'Basic',
        showArrow: false,
        underlayColor: '#ccc'
    }

    Basic() {
        const {
            titleElement,
            titleStyle,
            title,
            subElement,
            subtitleStyle,
            subtitle,
            showArrow,
            rightIconSource,
            style
            }=this.props

        const te = titleElement ? titleElement : <Text style={[styles.titleStyle,titleStyle]}>{title}</Text>
        const se = subElement ? subElement : <Text style={[styles.subtitleStyle,subtitleStyle]}>{subtitle}</Text>
        const ris = rightIconSource ? rightIconSource : require('./list_arrow.png')
        return <View style={[styles.cellStyle,style]}>
            {te}
            {se}
            {showArrow ? <Image source={ris} style={{marginLeft:4}}></Image> : null}
        </View>
    }

    renderTableRow() {
        const {type}=this.props
        let tableRow
        switch (type) {
            case 'Basic':
                tableRow = this.Basic()
                break
        }
        return tableRow
    }

    render() {
        const {onPress,underlayColor}=this.props
        const tableRow = onPress ? <TouchableHighlight onPress={onPress}
                                                       underlayColor={underlayColor}>{this.renderTableRow()}</TouchableHighlight> : this.renderTableRow()

        return <View>
            {tableRow}
        </View>
    }
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

export default TableRow
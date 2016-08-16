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
        this.Summary = this.Summary.bind(this)
    }

    static defaultProps = {
        type: 'Basic',
        showArrow: false,
        underlayColor: '#ccc'
    }

    Summary(style) {
        const {titleIcon,titleIconStyle,cellBodyStyle}=this.props
        const basicStyle = Object.assign({}, {padding: 12, paddingLeft: 0, marginLeft: 8}, cellBodyStyle || {})
        return <View style={[styles.summaryStyle,style]}>
            <Image source={titleIcon} style={[{marginLeft:12},titleIconStyle]}></Image>
            {this.Basic(basicStyle)}
        </View>
    }

    Basic(style) {
        const {
            titleElement,
            titleStyle,
            title,
            subElement,
            subtitleStyle,
            subtitle,
            showArrow,
            rightIconSource
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
        const {type,style}=this.props
        let tableRow
        switch (type) {
            case 'Basic':
                tableRow = this.Basic(style)
                break
            case 'Summary':
                tableRow = this.Summary(style)
                break
        }
        return tableRow
    }

    render() {
        const {onPress,underlayColor}=this.props
        const tableRow = onPress ? <TouchableHighlight onPress={onPress}
                                                       underlayColor={underlayColor}>{this.renderTableRow()}</TouchableHighlight> : this.renderTableRow()

        return <View style={{width:screenWidth}}>
            {tableRow}
        </View>
    }
}

const styles = StyleSheet.create({
    cellStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        //width: screenWidth,
        flex: 1,
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    summaryStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
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
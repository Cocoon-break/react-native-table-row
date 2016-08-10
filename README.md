# react-native-table-row
a table row for react-native >0.25

##	installation

	npm install https://github.com/Cocoon-break/react-native-table-row.git --save
	
###Basic Usage
	import TableView from 'react-native-table-row'
	const TableRow = TableView.TableRow
	
	class Example extends Component {
    render() {
        const image=<Image source={require('./avatar.jpg')} style={{width:60,height:60,borderRadius:30}}></Image>
        return (
            <View style={styles.container}>
                <TableView>
                    <TableRow title={'title1'}></TableRow>
                    <TableRow title={'title2'} showArrow={true}></TableRow>
                    <TableRow title={'title3'} subtitle={'subtitle3'}></TableRow>
                    <TableRow title={'title4'} subtitle={'subtitle4'} showArrow={true}></TableRow>
                    <TableRow title={'title5'} subElement={image}></TableRow>
                    <TableRow titleElement={image} subtitle={'subtitle'} subtitleStyle={{flex:1,textAlign:'right'}}></TableRow>
                </TableView>
            </View>
        );
    }}
    
	const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
	});
	
###Properties

Prop 		| Type 	 |Require	  |Description|
----------|----------|----------|----------|
onPress |function|false|then function for you when you click 
title|text|false|text for title
titleStyle|style|false|react native style for title text
titleElement|element|false |the element of react native,when you use this prop,the prop title and titleStyle will useless
subtitle|text|false|text for subtitle
subtitleStyle|style|false|react native style for subtitle text
subElement|element|flase|the element of react native,when you use this prop,the prop subtitle and subtitleStyle will useless
showArrow|boolean|false| show arrow in the right
rightIconSource||false|the source for image,it must be require("...") or {uri:"http://xxxxx"}


# react-native-table-row
a table row for react-native >0.25

##	installation

	npm install react-native-table-row --save
	
###Basic Usage
	import TableRow from 'react-native-table-row'
	
	class Example extends Component {
    render() {
        const image=<Image source={require('./avatar.jpg')} style={{width:60,height:60,borderRadius:30}}></Image>
        return (
            <View style={styles.container}>
                <TableRow title={'title1'}
                          type={'Summary'}
                          onPress={()=>{}}
                          titleIconStyle={{width:32,height:32}}
                          titleIconSource={require('./avatar.jpg')}
                          subtitle={'a message unRead'}
                          showArrow={true}></TableRow>
                <TableRow title={'title1'} onPress={()=>{}}></TableRow>
                <TableRow title={'title2'} showArrow={true}></TableRow>
                <TableRow title={'title3'} subtitle={'subtitle3'}></TableRow>
                <TableRow title={'title4'} subtitle={'subtitle4'} showArrow={true}></TableRow>
                <TableRow title={'title5'} subElement={image} showArrow={true}></TableRow>
                <TableRow titleElement={image} subtitle={'subtitle'}
                          subtitleStyle={{flex:1,textAlign:'right'}}></TableRow>
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
type|string|false|type must be Basic or Summary,default is Basic
titleIconSource|source|false|the source for image,it must be require('...'),it will use in type of Summary
titleIconStyle|style|false|style for titleIcon,use in type of Summary
cellBodyStyle| style |false | In addition to the titleIcon of style
onPress |function|false|then function for you when you click 
title|string|false|text for title
titleStyle|style|false|react native style for title text
titleElement|element|false |the element of react native,when you use this prop,the prop title and titleStyle will useless
subtitle|string|false|text for subtitle
subtitleStyle|style|false|react native style for subtitle text
subElement|element|flase|the element of react native,when you use this prop,the prop subtitle and subtitleStyle will useless
showArrow|boolean|false| show arrow in the right
rightIconSource|source|false|the source for image,it must be require("...")

##show case

![MacDown Screenshot](https://github.com/Cocoon-break/react-native-table-row/blob/master/screenShot.png)


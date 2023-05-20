import React from 'react'
import type { PropsWithChildren } from 'react';
// data passing in the component will be of particularly type

import {View, Text, StyleSheet} from 'react-native'

type currencyButtonProps = PropsWithChildren<{
        name:string,
        flag:string
}>

const CurrencyButton = (props:currencyButtonProps):JSX.Element =>{
  return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'center'
    },
    flag:{
        fontSize:25,
        color:'red',
        marginBottom:4
    },
    country:{
        fontSize:20,
        color:'red',
    },

})
export default CurrencyButton;

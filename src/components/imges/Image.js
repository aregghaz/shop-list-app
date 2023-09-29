import React from 'react'
import {Dimensions, Image, StyleSheet, View} from 'react-native'

import {NoImageSvg} from './NoImageSvg'
import {createPath} from "../../utils/imagePath";


const dimensionWidth = Dimensions.get('window').width
export const ImgOrSvg = ({
                             item,
                             product = '',
                             radius = 0,
                             column = 2,
                             padding = 0,
                             resizeMode = 'contain',
    type,
                             width,
                             height,
                         }) => {
    const correctPadding = padding * 4
    const divWidth = (dimensionWidth - correctPadding) / column
    const borderRadius = radius ? {borderRadius: radius} : {borderRadius: 0}
    const imgWidth = {width: width || divWidth}
    const trueWidth = width ? {width} : {width: '100%'}
    const trueHeight = height ? {height} : {height: undefined}
    console.log(item,'item')
    return (
        <View>
            {item? (
                <Image
                    style={[styles.image, borderRadius, trueWidth, trueHeight]}
                    source={{uri: createPath(type,item)}}
                    alt={item}
                    resizeMode={resizeMode}
                />
            ) : (
                <View style={[styles.img_wrapper, imgWidth, borderRadius]}>
                    <NoImageSvg width={width || divWidth} height={width || divWidth}/>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
    },
    img_wrapper: {
        overflow: 'hidden',
    },
})

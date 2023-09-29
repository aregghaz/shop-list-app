import React from 'react'
import {GestureResponderEvent, Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import Swiper from 'react-native-swiper'

import {getVH, isMedium, isSmall} from '../../utils/breakPoint'



const colors = {
    dotColor: '#BFBFBF',
    activeDotColor: '#404040',
}

const Slider = ({slides, navigation}) => {
   // console.log(slides,'slidesslides')
    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <Swiper
                    horizontal={true}
                    loop={true}
                    showsPagination={true}
                    paginationStyle={styles.paginationStyle}
                    dotStyle={styles.dot}
                    activeDotStyle={styles.activeDot}
                    scrollEnabled={true}
                    showsButtons={false}
                    autoplay={true}
                    autoplayTimeout={500}
                    autoplayDirection={true}
                    pagingEnabled={true}
                >
                    {slides.map(({image, onPress, navigate = {to: '', param: {}}, id}) => {
                        console.log(image)
                        return (
                            <TouchableOpacity
                                activeOpacity={1}
                                key={id}
                                onPress={(event) => {
                                    onPress && onPress(event)
                                    navigation && navigation(navigate.to, navigate.param)
                                }}
                                style={styles.slide}
                            >
                                <Image
                                    source={{uri: image}}
                                    alt={'image'}
                                    style={styles.image}
                                    resizeMode={'cover'}
                                />
                            </TouchableOpacity>
                        )
                    })}
                </Swiper>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    activeDot: {
        backgroundColor: colors.activeDotColor,
        borderRadius: 100,
        height: isMedium ? 12 : 8,
        marginEnd: 8,
        marginStart: 8,
        width: isMedium ? 12 : 8,
    },

    body: {
        flex: 1,
        flexDirection: 'row',
        // height: isMedium ? 650 : 250,
        height: getVH(isSmall ? 30 : 35),
        justifyContent: 'center',
        width: '100%',
    },

    container: {
        height: '90%',
        // maxWidth: 500,
    },

    dot: {
        backgroundColor: colors.dotColor,
        borderRadius: 100,
        height: isMedium ? 12 : 8,
        marginEnd: 8,
        marginStart: 8,
        width: isMedium ? 12 : 8,
    },

    image: {
        borderRadius: 10,
        flex: 1,
    },

    paginationStyle: {
        bottom: isMedium ? -20 : -15,
    },

    slide: {
        flex: 1,
        padding: 10,
    },
})

export default Slider

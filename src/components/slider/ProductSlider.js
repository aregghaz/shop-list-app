import React from 'react'
import {FlatList, Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native'
import {createPath} from "../../utils/imagePath";
import Entypo from "react-native-vector-icons/Entypo";
import {useSelector} from "react-redux";
import {RecipeCard} from "../../AppStyles";

const colors = {
    dotColor: '#BFBFBF',
    activeDotColor: '#404040',
}

const ProductSlider = ({navigation}) => {
    const onPressRecipe = (item) => {
        navigation.navigate("Recipe", {item});
    };


    const renderRecipes = ({item}) => {
        console.log( createPath("products", item.images[0]),'2222')
        return (
            <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
                <View style={styles.container}>
                    <Image style={styles.photo} source={{uri: createPath("products", item.images[0])}}/>
                    <View style={styles.title}>
                        <Text>{item.price} դր.</Text>
                    </View>
                    <View style={styles.title}>
                        <Text>{item.product_name.nameAm}</Text>
                    </View>

                    {/*<View style={styles.title}>*/}
                    {/*    <Text>{item.product_name.descriptionAm}</Text>*/}
                    {/*</View>*/}
                    <View style={styles.iconView}>
                        <Entypo style={styles.icon} name={'star'} size={20}/>
                        <Entypo name={'star'} size={20}/>
                        <Entypo name={'star-outlined'} size={20}/>
                        <Entypo name={'star-outlined'} size={20}/>
                        <Entypo name={'star-outlined'} size={20}/>
                    </View>

                </View>
            </TouchableHighlight>
        )
    };
    const {newProduct, products} = useSelector((state) => state.home)


    return newProduct.length > 0 && (
        <View>
            <FlatList
                horizontal
                showsVerticalScrollIndicator={false}
                ///numColumns={2}
                data={newProduct}
                renderItem={renderRecipes}
                keyExtractor={(item) => `${item.id}`}
            />
        </View>
    )
}


export default ProductSlider



const styles = StyleSheet.create({
    container: RecipeCard.container,
    photo: RecipeCard.photo,
    title: RecipeCard.title,
    category: RecipeCard.category,
    icon: RecipeCard.icon,
    iconView:RecipeCard.iconView
});
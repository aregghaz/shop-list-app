import React, {useCallback, useLayoutEffect, useState} from "react";
import {FlatList, Image, ScrollView, Text, TouchableHighlight, View} from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import {getCategoryName} from "../../data/MockDataAPI";
import {Home_Api} from "../../api/home";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../../store/homeSlice";
import {useFocusEffect} from "@react-navigation/native";
import {createPath} from "../../utils/imagePath";
import Companies from "../../components/Companies/Companies";
import Category from "../../components/Category/Category";
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Slider from "../../components/slider/Slider";
import {slider} from "../../data/dataArrays";

export default function HomeScreen(props) {
    const {navigation} = props;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const {products, isLoading, category, companies} = useSelector((state) => state.home)
    const getAsyncData = async () => {
        const data = await Home_Api.getHomeData()
        dispatch(setData(data))
    }
    useFocusEffect(
        useCallback(() => {
            getAsyncData()
        }, [isLoading])
    )
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <MenuImage
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                />
            ),
            headerRight: () => <View/>,
        });
    }, []);
    const onPressRecipe = (item) => {
        navigation.navigate("Recipe", {item});
    };

    const renderRecipes = ({item}) => {
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

    return products.length > 0 && (
       <ScrollView>
           <Slider slides={slider}/>
           <Category navigation={navigation} category={category}/>
           <View><Companies navigation={navigation} companies={companies}/></View>

           <FlatList
               horizontal
               showsVerticalScrollIndicator={false}
               ///numColumns={2}
               data={products}
               renderItem={renderRecipes}
               keyExtractor={(item) => `${item.id}`}
           />
       </ScrollView>
    );
}

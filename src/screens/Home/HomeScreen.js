import React, {useCallback, useLayoutEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import MenuImage from "../../components/MenuImage/MenuImage";
import {Home_Api} from "../../api/home";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../../store/homeSlice";
import {useFocusEffect} from "@react-navigation/native";
import Companies from "../../components/Companies/Companies";
import Category from "../../components/Category/Category";
import Slider from "../../components/slider/Slider";
import {slider} from "../../data/dataArrays";
import ProductSlider from "../../components/slider/productSlider";

export default function HomeScreen(props) {
    const {navigation} = props;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true)
    const {isLoading, category, companies} = useSelector((state) => state.home)
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

    return (
        <ScrollView>
            <Slider slides={slider}/>
            <Category navigation={navigation} category={category}/>
            <View><Companies navigation={navigation} companies={companies}/></View>
            <ProductSlider
                navigation={navigation}
                /// title={}

            />
        </ScrollView>
    );
}

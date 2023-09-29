import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {getVW} from "../../utils/breakPoint";
import Icon from 'react-native-vector-icons/FontAwesome';


const local = 'ru'
const Category = ({category, navigation}) => {
    return (
        <View style={styles.main}>
            <ScrollView
                snapToInterval={getVW(25)}
                snapToAlignment={'start'}
                snapToStart={true}
                decelerationRate={0}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                style={styles.body}
            >
                {(category ?? []).map((item) => {
                    return (
                        <View key={item.id} style={styles.items}>
                            <TouchableOpacity
                                onPress={() => {
                                    //// navigation.navigate(SCREEN.STACK_CATEGORY_INNER, item)
                                }}
                            >

                                <View style={styles.textContainer}>
                                    <Icon size={25} style={styles.icon} name={item.icon}/>
                                    <Text style={styles.text}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
       flexGrow: 0,
       width: '100%',
    },

    categoryButton: {
        // alignItems: 'center',
        // flexGrow: 1,
        // padding: 4,
        // width: 100,
    },

    items: {
         marginHorizontal: 5,
    },

    main: {
        // flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // width: '100%',
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        ///minWidth: 90,
        ///flexDirection: "row",
        fontSize: 20,
        fontWeight: '300',
        letterSpacing: -0.3,
        marginRight: 10,
       /// width: 'auto',
    },

    textContainer: {
        paddingVertical: 5,
        flexDirection: "row",
        paddingHorizontal: 0,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: 'grey',
        borderRadius: 25,
        justifyContent: 'center',
        verticalAlign: 'middle',


    },
})

export default Category

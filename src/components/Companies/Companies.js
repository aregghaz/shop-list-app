import { StyleSheet, TouchableOpacity,ScrollView, Text, View } from 'react-native'
import {ImgOrSvg} from "../imges/Image";
import {getVW} from "../../utils/breakPoint";


const local = 'ru'
const Companies  = ({ companies, navigation }) => {
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
                {(companies ?? []).map((item) => {
                    return (
                        <View key={item.id} style={styles.items}>
                            <TouchableOpacity
                                onPress={() => {
                                   //// navigation.navigate(SCREEN.STACK_CATEGORY_INNER, item)
                                }}
                                style={styles.categoryButton}
                            >
                                <ImgOrSvg type={'companies'} item={item.logo} radius={0} width={90} height={90} />
                                <View style={styles.textContainer}>
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
        alignItems: 'center',
        flexGrow: 1,
        height: 100,
        padding: 4,
        width: 100,
    },

    items: {
        paddingBottom: 20,
        width: getVW(25),
    },

    main: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },

    text: {
        flex: 1,
        fontSize: 13,
        fontWeight: '500',
        letterSpacing: -0.3,
        marginTop: 5,
        textAlign: 'center',
    },

    textContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
})

export default Companies

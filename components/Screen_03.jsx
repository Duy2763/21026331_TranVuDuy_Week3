import { useRoute, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image, FlatList, Alert, SafeAreaView } from "react-native";
import { useBasket } from "../BasketContextAPI/BasketContext";

export default function Screen_03() {
    const navigation = useNavigation();
    const route = useRoute();
    // const [data, setData] = useState([
    //     {key: '1', type: 'Vegetable', name: 'Apple', price: '28.00', image: require('../assets/images/Image 101.png'), sl: 0},
    //     {key: '2', type: 'Vegetable', name: 'Pear', price: '28.00', image: require('../assets/images/Image 102.png'), sl: 0},
    //     {key: '3', type: 'Vegetable', name: 'Apricot', price: '28.00', image: require('../assets/images/Image 103.png'), sl: 0},
    //     {key: '4', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/images/Image 105.png'), sl: 0},
    //     {key: '5', type: 'Vegetable', name: 'Orange', price: '28.00', image: require('../assets/images/Image 106.png'), sl: 0},
    //     {key: '6', type: 'Vegetable', name: 'Avacado', price: '28.00', image: require('../assets/images/Image 107.png'), sl: 0},
        
    //     {key: '7', type: 'Seafood', name: 'Crab', price: '28.00', image: require('../assets/images/crab.jpg'), sl: 0},
    //     {key: '8', type: 'Seafood', name: 'Crayfish', price: '28.00', image: require('../assets/images/crayfish.jpg'), sl: 0},
    //     {key: '9', type: 'Seafood', name: 'Oyster', price: '28.00', image: require('../assets/images/oyster.jpg'), sl: 0},
    //     {key: '10', type: 'Seafood', name: 'Shrimp', price: '28.00', image: require('../assets/images/shrimp.jpg'), sl: 0},
    //     {key: '11', type: 'Seafood', name: 'Tuna', price: '28.00', image: require('../assets/images/tuna.jpg'), sl: 0},
    
    //     {key: '12', type: 'Drinks', name: 'Orange Juice', price: '28.00', image: require('../assets/images/orange_juice.jpg'), sl: 0},
    //     {key: '13', type: 'Drinks', name: 'Apple Juice', price: '28.00', image: require('../assets/images/apple_juice.jpg'), sl: 0},
    //     {key: '14', type: 'Drinks', name: 'Straw Berry Juice', price: '28.00', image: require('../assets/images/strawberry_juice.jpg'), sl: 0},
    //     {key: '15', type: 'Drinks', name: 'Tomato Juice', price: '28.00', image: require('../assets/images/tomato_juice.jpg'), sl: 0},
    //     {key: '16', type: 'Drinks', name: 'Grape Juice', price: '28.00', image: require('../assets/images/grape_juice.jpg'), sl: 0},
    // ]);

    const { products, updateQuantity, decrementQuantity, resetQuantities } = useBasket();
    // const addSoLuong = (key) => {
    //     setData(
    //         data.map(item => item.key === key ? {...item, sl: item.sl + 1} : item)
    //     );
    // }

    // const subtractSoLuong = (key) => {
    //     setData(
    //         data.map(item => item.key === key ? {...item, sl: Math.max(item.sl - 1, 0)} : item)
    //     );
    // }

    const showPaymentSuccessAlert = (total) => {
        Alert.alert(
            "Payment Successful",
            `Your payment of $${total} has been processed successfully.`,
            [
                {
                    text: "OK",
                    onPress: () => {
                        console.log("OK Pressed");
                        resetQuantities();
                        navigation.navigate('Screen_02');
                    }
                }
            ],
            { cancelable: false }
        );
    };

    const calculateTotal = () => {
        return products.reduce((total, item) => {
            const itemTotal = item.sl * parseFloat(item.price);
            return total + itemTotal;
        }, 0).toFixed(2);  
    };

    const {key} = !route.params ? 0 : route.params;
    useEffect(() => {        
        if (key) {
            updateQuantity(key)
        }
    }, [key]);


    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <View>
                    <View style={Style.tabBar}>
                        <TouchableOpacity onPress={() => navigation.navigate('Screen_02')}>              
                            <Image
                                style={Style.tabBarImage}
                                source={require('../assets/images/Image183.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View 
                        style={{
                            width: '100%',
                            justifyContent: 'center',
                            height: 50,
                            paddingHorizontal: 20
                        }}
                    >
                        <Text style={{fontSize: 25, color: 'green', fontWeight: 'bold'}}>
                            My Basket
                        </Text>
                    </View>
                </View>
                <ScrollView style={{marginBottom: 170}}>
                    <FlatList
                        data={products.filter(item => item.sl > 0)} 
                        keyExtractor={item => item.key}
                        renderItem={({item}) => (
                            <View style={Style.flatItem}>
                                <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={{flexDirection: 'row', justifyContent: "center"}}>
                                        <Image
                                            source={item.image}
                                            style={Style.flatItemImage}
                                            resizeMode="contain"
                                        />
                                        <View> 
                                            <Text style={{fontSize: 25, fontWeight: 'bold', color: 'green'}}>${item.price}</Text>
                                            <Text style={{fontSize: 18, color: 'gray', marginBottom: 7}}>{item.name}</Text>
                                            <View style={{flexDirection: "row"}} > 
                                                <Image
                                                    source={require('../assets/images/Image180.png')}
                                                    style={Style.startIcon}
                                                />
                                                <Image
                                                    source={require('../assets/images/Image180.png')}
                                                    style={Style.startIcon}
                                                />
                                                <Image
                                                    source={require('../assets/images/Image180.png')}
                                                    style={Style.startIcon}
                                                />
                                                <Image
                                                    source={require('../assets/images/Image180.png')}
                                                    style={Style.startIcon}
                                                />
                                                <Image
                                                    source={require('../assets/images/Image180.png')}
                                                    style={Style.startIcon}
                                                />
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'space-between'}}>
                                        <TouchableOpacity onPress={() => decrementQuantity(item.key)}>
                                            <Image
                                                source={require('../assets/images/Image176.png')}
                                                style={Style.subAddIcon}
                                            />
                                        </TouchableOpacity>
                                        <Text style={{fontSize: 18, fontWeight: 'bold', marginHorizontal: 5}}>{item.sl}</Text> 
                                        <TouchableOpacity onPress={() => updateQuantity(item.key)}>
                                            <Image
                                                source={require('../assets/images/Image175.png')}
                                                style={Style.subAddIcon}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                        ListEmptyComponent={<Text style={{textAlign: 'center', marginTop: 20}}>Shopping cart is empty</Text>}
                    />
                </ScrollView>

                <View 
                    style={{
                        justifyContent: 'center', 
                        padding: 10, 
                        marginTop: 20, 
                        // borderTopWidth: 1,
                        // borderColor: 'gray',
                        backgroundColor: 'white',
                        position: 'absolute', 
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'purple'}}>Total</Text>
                        <Text style={{fontSize: 30, fontWeight: 'bold', color: 'purple'}}>${calculateTotal()}</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'green',
                            borderRadius: 40, 
                            width: 240, 
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginVertical: 20,
                            alignSelf: 'center',
                            width: '100%'
                        }}
                        onPress={() => showPaymentSuccessAlert(calculateTotal())}
                    >
                        <Text style={{fontSize: 20, color: 'white'}}>Payment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
        
    )
}

const Style = StyleSheet.create({
    flatItem: {
        marginHorizontal: '2.5%',
        padding: 15,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        borderStyle: "dashed",
        backgroundColor: 'white',
    },
    flatItemImage: {
        width: 80,
        height: 80, 
        marginRight: 10,
    },
    tabBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    startIcon: {
        width: 15, 
        height: 15,
    },
    subAddIcon: {
        width: 20, 
        height: 20,
    }
});

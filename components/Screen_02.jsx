import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

export default function Screen_02() {
    const navigation = useNavigation();
    const [data, setData] = useState([
        {key: '1', type: 'Vegetable', name: 'Apple', price: '28.00', image: require('../assets/images/Image101.png')},
        {key: '2', type: 'Vegetable', name: 'Pear', price: '28.00', image: require('../assets/images/Image102.png')},
        {key: '3', type: 'Vegetable', name: 'Apricot', price: '28.00', image: require('../assets/images/Image103.png')},
        {key: '4', type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/images/Image105.png')},
        {key: '5', type: 'Vegetable', name: 'Orange', price: '28.00', image: require('../assets/images/Image106.png')},
        {key: '6', type: 'Vegetable', name: 'Avacado', price: '28.00', image: require('../assets/images/Image107.png')},
        
        {key: '7', type: 'Seafood', name: 'Crab', price: '28.00', image: require('../assets/images/crab.jpg')},
        {key: '8', type: 'Seafood', name: 'Crayfish', price: '28.00', image: require('../assets/images/crayfish.jpg')},
        {key: '9', type: 'Seafood', name: 'Oyster', price: '28.00', image: require('../assets/images/oyster.jpg')},
        {key: '10', type: 'Seafood', name: 'Shrimp', price: '28.00', image: require('../assets/images/shrimp.jpg')},
        {key: '11', type: 'Seafood', name: 'Tuna', price: '28.00', image: require('../assets/images/tuna.jpg')},

        {key: '12', type: 'Drinks', name: 'Orange Juice', price: '28.00', image: require('../assets/images/orange_juice.jpg')},
        {key: '13', type: 'Drinks', name: 'Apple Juice', price: '28.00', image: require('../assets/images/apple_juice.jpg')},
        {key: '14', type: 'Drinks', name: 'Straw Berry Juice', price: '28.00', image: require('../assets/images/strawberry_juice.jpg')},
        {key: '15', type: 'Drinks', name: 'Tomato Juice', price: '28.00', image: require('../assets/images/tomato_juice.jpg')},
        {key: '16', type: 'Drinks', name: 'Grape Juice', price: '28.00', image: require('../assets/images/grape_juice.jpg')},
    ]);
 
    const [type, setType] = useState('Vegetable');
    const [selectedBtn, setSelectedBtn] = useState('');
    const [initialItemCount, setInitTialItemCount] = useState(6);
    const [showAll, isShowAll] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSeeAll, isSelectedSeeAll] = useState(true);

    return (
        <SafeAreaView>
            <View>
                <View>
                    <View style={Style.tabBar}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Screen_01')}              
                        >
                            <Image
                                style={Style.tabBarImage}
                                source={require('../assets/images/Image183.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Screen_03')}      
                        >
                            <Image
                                style={Style.tabBarImage}
                                source={require('../assets/images/Image182.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <TextInput
                        style={[Style.tabBarIcon, {color: 'black'}]}
                        placeholder="Search"
                        placeholderTextColor="gray"
                        onChangeText={text => setSearchQuery(text)}
                        value={searchQuery}
                    />
                </View>

                <View style={Style.groupFilterBtn}>
                    <TouchableOpacity 
                        style={[Style.filterBtn, {backgroundColor: selectedBtn === 'Vegetable' ? 'green' : 'white'}]}
                        onPress={() => { 
                            setType('Vegetable');
                            setSelectedBtn('Vegetable');
                            isShowAll(false);
                            isSelectedSeeAll(false);
                            setInitTialItemCount(6);
                        }}
                    >
                        <Text style={Style.filterText}>
                            Vegetable
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[Style.filterBtn, {backgroundColor: selectedBtn === 'Seafood' ? 'green' : 'white'}]}
                        onPress={() => { 
                            setType('Seafood');
                            setSelectedBtn('Seafood');
                            isShowAll(false);
                            isSelectedSeeAll(false);
                            setInitTialItemCount(5);  
                        }}
                    >
                        <Text style={Style.filterText}>
                            Seafood
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[Style.filterBtn, {backgroundColor: selectedBtn === 'Drinks' ? 'green' : 'white'}]}
                        onPress={() => { 
                            setType('Drinks');
                            setSelectedBtn('Drinks');
                            isShowAll(false);
                            isSelectedSeeAll(false);
                            setInitTialItemCount(5);   
                        }}
                    >
                        <Text style={Style.filterText}>
                            Drinks
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={Style.header}
                >
                    <Text style={Style.headerText}>Order your favorite!</Text>
                    <TouchableOpacity onPress={() => {
                        isShowAll(true);
                        isSelectedSeeAll(true);
                        setSelectedBtn("");
                    }}>
                        <Text style={[Style.seeAllText, {color: selectedSeeAll ? 'red' : 'pink'}]}>
                            See all
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={[Style.scrollView, { overflowY: 'scroll' }]}>
                    <View>
                        {
                            searchQuery.length !== 0 ?
                            (<FlatList
                                data={data.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))}
                                keyExtractor={item => item.key}
                                renderItem={({item}) => (
                                    <View style={Style.flatItem}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Screen_03', {key: item.key}) }>
                                            <Image
                                                source={item.image}
                                                resizeMode="contain"
                                                style={Style.image}
                                            />
                                        </TouchableOpacity>
                                        <Text style={Style.itemName}>{item.name}</Text>
                                    </View>
                                )}
                                numColumns={2}
                            />)
                            :
                            (<FlatList
                                data={showAll ? data : data.filter((item) => item.type === type)}
                                keyExtractor={item => item.key}
                                renderItem={({item}) => (
                                    <View style={Style.flatItem}>
                                        <TouchableOpacity onPress={() => navigation.navigate('Screen_03', {key: item.key})}>
                                            <Image
                                                source={item.image}
                                                resizeMode="contain"
                                                style={Style.image}
                                            />
                                        </TouchableOpacity>
                                        <Text style={Style.itemName}>{item.name}</Text>
                                    </View>
                                )}
                                numColumns={2}
                            />)
                        }
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
        
    )
}

const Style = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    tabBarIcon: {
        borderWidth: 1,
        borderColor: 'gray',
        width: '90%',
        borderRadius: 10,
        height: 50,
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 20,
        paddingLeft: 20,
    },
    tabBarImage: {
       width: 25, 
       height: 25
    },
    groupFilterBtn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20
    },
    filterBtn: {
        borderWidth: 1,
        borderRadius: 40,
        padding: 10,
    },
    filterText: {
        fontWeight: 'bold',
        color: 'blue'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
        paddingBottom: 20
    },
    headerText: {
        fontSize: 25,
        color: 'green'
    },
    seeAllText: {
        fontSize: 25
    },
    scrollView: {
        marginBottom: 500
    },
    flatItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '45%',
        marginHorizontal: '2.5%',
        marginVertical: '2.5%',
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10
    },
    image: {
        width: 100,
        height: 100
    },
    itemName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    }
})

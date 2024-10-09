import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import img1 from '../assets/images/Image_96.png';
import img2 from '../assets/images/Image95.png';
import img3 from '../assets/images/Image97.png';
import { useNavigation } from '@react-navigation/native';

export default function Screen_01() {
    const navigation = useNavigation();
    const a = 10;
  return (
    <SafeAreaView>
        <View>
        <View style={{alignItems: 'center', margin: 40}}>
            <Text style={Style.text}>Order your favorite!</Text>
        </View>
        <View>
            <Image 
                source={img1} 
                style={{width: 150, height: 150, marginLeft: 200}}
            />
            <Image 
                source={img2}
                style={{width: 150, height: 150, marginLeft: 20}}
            />
            <Image 
                source={img3} 
                style={{width: 150, height: 150, marginLeft: 200}}
            />
            </View>
            <View  style={{alignItems: 'center', margin: 40}}>
                <TouchableOpacity 
                    style={Style.button}
                    onPress={() => navigation.navigate('Screen_02')}
                >
                    <Text  style={Style.buttonText}>Press Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    
  );
}

const Style = StyleSheet.create({
    text: {
        color: 'green',
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {   
        backgroundColor: 'green',
        borderRadius: 40,
        width: 240,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
})

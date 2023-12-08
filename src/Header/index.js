import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Header() {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image
                    source={require('../img/logo.png')}
                />
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                    source={require('../img/send.png')}
                    style={styles.send}
                />
            </TouchableOpacity>
        </View>
    )
};


const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        height: 40,
        borderBottomWidth: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15,
        elevation: 2,

    },
    send: {
        width: 25,
        height: 25,
    }
})
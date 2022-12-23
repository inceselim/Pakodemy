import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ButtonCard({ title, brand, id, onPress }) {
    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.container}>
                <View style={styles.itemId}>
                    <Text>{id}</Text>
                </View>

                <View style={styles.textContent}>
                    <Text>{brand}</Text>
                    <Text>{title}</Text>
                </View>
            </View>


        </TouchableOpacity>
    );
}

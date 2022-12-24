import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ButtonCard({ title, brand, category, price, id, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.itemId}>
                <Text style={styles.titleText}>{id + 1}</Text>
            </View>

            <View style={styles.textContent}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.textContent}>{category}</Text>
            </View>
            <View style={styles.priceContent}>
                <Text>{price} $</Text>
            </View>
        </TouchableOpacity>
    );
}

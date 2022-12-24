import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import styles from './styles';

export default function ButtonCard({ item, onPress }) {
    console.log(item)
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <ScrollView pagingEnabled horizontal >
                {
                    item.images.map((i) =>
                        <Image key={i} style={styles.image} source={{ uri: i }} />)
                }
            </ScrollView>

            <View style={styles.content}>
                <View style={styles.textContent}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.textContent}>{item.category}</Text>
                </View>

                <View style={styles.priceContent}>
                    <Text style={styles.priceText}>{item.price+item.discountPercentage}</Text>
                    <Text style={styles.discountText}>{item.price} $</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

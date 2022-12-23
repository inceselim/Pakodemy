import React from 'react';
import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native';
import styles from '../styles/styles';

//
// i18n
//
import "../languages/i18n";
import { useTranslation } from 'react-i18next'
// --------

export default function DetailScreen(props) {
    const item = props.route.params.item
    const { t, i18n } = useTranslation();
    console.log(item)
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>{item.title}</Text>

            <View style={{ flexDirection: "row", height: 180 }}>
                <ScrollView horizontal>
                    {
                        item.images.length > 0 ?
                            item.images.map((i) => {
                                return (
                                    <Image style={styles.pageImg}
                                        source={{ uri: i }} />
                                )
                            })
                            : <Text style={styles.headerText}>{t("Image_Not_Found")}</Text>
                    }
                </ScrollView>
            </View>
            <View>
                <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
                    <Text style={styles.contentTitle}>{item.title} </Text>
                    <Text style={styles.contentTitle}>{item.price} $</Text>

                </View>
                <Text style={styles.contentText}>{t("Category")}: {item.category} </Text>
                <Text style={styles.contentText}>{t("Product_Details")}: {item.description} </Text>
            </View>

        </SafeAreaView >
    );
}

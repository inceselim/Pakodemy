import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Text, SafeAreaView, ActivityIndicator, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import styles from "../styles/styles"
import axios from 'axios';
import ButtonCard from '../components/ButtonCard/ButtonCard';
import { BASE_URL } from '../api/api';

import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

//
// i18n
//
import "../languages/i18n";
import { useTranslation } from 'react-i18next'
// --------

export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [inputFocus, setInputFocus] = useState(false)
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const { t, i18n } = useTranslation();
    const getData = async () => {
        setIsLoading(true)
        await axios({
            method: 'get',
            // url: 'http://www.omdbapi.com/?t=' + `${searchText}` + '&apikey=72a3fbe1',
            url: BASE_URL + "?limit=10&skip=" + page,
            responseType: 'json',
        })
            .then((response) => {
                setData(data.concat(response.data.products))
                console.log("DATA :    ", data)
                setIsLoading(false)
            })
    }

    const searchData = async () => {
        setIsLoading(true)
        await axios({
            method: 'get',
            // url: 'http://www.omdbapi.com/?t=' + `${searchText}` + '&apikey=72a3fbe1',
            url: BASE_URL + "search?q=" + searchText,
            responseType: 'json',
        })
            .then((response) => {
                setData(response.data.products)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log("err :    ", JSON.stringify(err.response, 0, 2))
                setData()
                setIsLoading(false)
            })
    }

    const handleGetMore = () => {
        setIsLoading(true)
        setPage(page + 1)
    }

    useEffect(() => {
        getData()
    }, [page])

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.input}>
                <TextInput
                    placeholder={t("Search")}
                    style={inputFocus
                        ? styles.searchBar__clicked
                        : styles.searchBar__unclicked}
                    value={searchText}
                    onChangeText={setSearchText}
                    onFocus={() => {
                        setInputFocus(true)
                    }}
                />
                {inputFocus && (
                    <TouchableOpacity onPress={() => { searchData() }} >
                        <FontAwesome name='search' size={27} />
                    </TouchableOpacity>
                )}
                {inputFocus && (
                    <TouchableOpacity onPress={() => {
                        Keyboard.dismiss();
                        setInputFocus(false);
                    }}>
                        <MaterialIcons name='cancel' size={27} />
                    </TouchableOpacity>
                )}
            </View>

            <View style={styles.content} >
                {
                    data.length > 0 ?
                        <FlatList data={data} onEndReached={handleGetMore}
                            onEndReachedThreshold={0} keyExtractor={(item, index) => index}
                            ListFooterComponent={isLoading && <ActivityIndicator size={33} />}
                            renderItem={({ item, index }) => {
                                return (
                                    <ButtonCard onPress={()=>navigation.navigate("Detail",
                                    {item:item})}
                                     id={index} price={item.price} category={item.category} title={item.title} brand={item.brand} />
                                );
                            }} />
                        :
                        <Text>{t("Product_Not_Found")}...</Text>
                }
            </View>

        </SafeAreaView>
    );
}

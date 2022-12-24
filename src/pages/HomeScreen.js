import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Text, SafeAreaView, ActivityIndicator, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import styles from "../styles/styles"
import axios from 'axios';
import ButtonCard from '../components/ButtonCard/ButtonCard';
import { BASE_URL } from '../api/api';

import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import { useSelector, useDispatch } from "react-redux";
import { fetchData, selectData, selectLoading, isLoading, searchData } from '../redux/features/dataSlice/dataSlice';
//
// i18n
//
import "../languages/i18n";
import { useTranslation } from 'react-i18next'
// --------

export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState("")
    const [inputFocus, setInputFocus] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [page, setPage] = useState(0)
    const data = useSelector(selectData)
    const loading = useSelector(selectLoading)
    const { t, i18n } = useTranslation();

    const dispatch = useDispatch();

    const search = () => {
        dispatch(searchData(searchText))
    }

    const handleGetMore = () => {
        setPage(page + 1)
    }
    const handleRefresh = () => {
        setPage(0)
    }

    useEffect(() => {
        dispatch(fetchData(page))
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
                    <TouchableOpacity onPress={() => { search() }} >
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
                <FlatList data={data} onEndReached={handleGetMore}
                    onEndReachedThreshold={0.4} keyExtractor={(item, index) => index}
                    ListFooterComponent={loading && <ActivityIndicator size={33} />}
                    onRefresh={handleRefresh} refreshing={refresh}
                    ListEmptyComponent={<Text style={styles.errorText} >{t("Product_Not_Found")}...</Text>}
                    renderItem={({ item, index }) => {
                        return (
                            <ButtonCard onPress={() => navigation.navigate("Detail",
                                { item: item })}
                                id={index} price={item.price} category={item.category} title={item.title} brand={item.brand} />
                        );
                    }} />
            </View>

        </SafeAreaView>
    );
}

import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Text, SafeAreaView, ActivityIndicator, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import styles from "../styles/styles"
import axios from 'axios';
import ButtonCard from '../components/ButtonCard/ButtonCard';
export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState("Lord")
    const [isLoading, setIsLoading] = useState(false)
    const [inputFocus, setInputFocus] = useState(false)
    const [page, setPage] = useState(0)
    const [data, setData] = useState([])

    const getData = async () => {
        setIsLoading(true)
        await axios({
            method: 'get',
            // url: 'http://www.omdbapi.com/?t=' + `${searchText}` + '&apikey=72a3fbe1',
            url: "https://dummyjson.com/products?limit=10&skip=" + page,
            responseType: 'json',
        })
            .then((response) => {
                setData(data.concat(response.data.products))
                //console.log("DATA :    ", data)
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
                    placeholder="Search"
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
                    <Button title='Ara' onPress={() => {
                        getData()
                    }} />
                )}
                {inputFocus && (
                    <Button
                        title="Cancel"
                        onPress={() => {
                            Keyboard.dismiss();
                            setInputFocus(false);
                        }}
                    ></Button>
                )}
            </View>

            <View style={styles.content} >
                <FlatList data={data} onEndReached={handleGetMore}
                    onEndReachedThreshold={0} keyExtractor={(item, index) => index}
                    ListFooterComponent={isLoading && <ActivityIndicator size={33} /> }
                    renderItem={({ item, index }) => {
                        return (
                            <ButtonCard id={index} title={item.title} brand={item.brand} />
                        );
                    }} />
            </View>

        </SafeAreaView>
    );
}

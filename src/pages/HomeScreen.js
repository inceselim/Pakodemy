import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Text, SafeAreaView, ActivityIndicator, TouchableOpacity, Keyboard, FlatList } from 'react-native';
import styles from "../styles/styles"
import axios from 'axios';
export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState("Lord")
    const [inputFocus, setInputFocus] = useState(false)
    const [data, setData] = useState([])

    const getData = async () => {
        await axios({
            method: 'get',
            url: 'http://www.omdbapi.com/?t=' + `${searchText}` + '&apikey=72a3fbe1',
            responseType: 'json',
        })
            .then((response) => {
                console.log(response.data)
                setData(response.data)
                console.log("data", data)
            });
    }
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity>
                <Text>{item.Title}</Text>
            </TouchableOpacity>
        );
    };

    useEffect(() => {

    }, [])
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

            <Text>{data.Title}</Text>
            <FlatList data={JSON.stringify(data)} renderItem={({ item }) => {
                return (
                    <TouchableOpacity>
                        <Text>{item.Writer}</Text>
                    </TouchableOpacity>
                );
            }} />
        </SafeAreaView>
    );
}

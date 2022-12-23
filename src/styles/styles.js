import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 11,
    },
    searchBar__unclicked: {
        padding: 5,
        flexDirection: "row",
        width: "90%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        marginBottom: 5,
    },
    searchBar__clicked: {
        padding: 5,
        flexDirection: "row",
        width: "60%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom: 5,
    },
    input: {
        flex:0.1,
        fontSize: 15,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    content: {
        flex: 0.9,
        marginBottom:5,
    }
})
export default styles;
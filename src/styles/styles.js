import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

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
        marginBottom: 1,
    },
    input: {
        flex: 0.1,
        fontSize: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    content: {
        flex: 0.9,
        marginBottom: 5,
    },
    headerText: {
        fontFamily: "Arial",
        fontSize: 24,
        textAlign: "center",
        color: "#033",
        padding: 3,
    },
    pageImg: {
        height: 150,
        width: screenWidth-50,
        alignContent:"center",
        marginLeft: 10,
        borderRadius: 30,
        marginTop: 10
    },
    contentTitle: {
        fontFamily: "Arial",
        fontSize: 18,
        color: "#033",
        marginBottom:5,
    },
    contentText: {
        fontFamily: "Arial",
        fontSize: 14,
    },
})
export default styles;
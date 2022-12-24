import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const cardHeight = screenHeight / 2
const cardWidth = screenWidth - 30
const styles = StyleSheet.create({
    container: {
        height: cardHeight,
        width: cardWidth,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderTopRightRadius: 20,
        borderColor: "#ccc",
        borderWidth: 1,
    },
    image: {
        height: cardHeight - 50,
        width: cardWidth,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 20,
    },
    content: {
        height: 50,
        width: cardWidth,
        flexDirection: "row",
        alignItems:"center"
    },
    textContent: {
        marginStart: 5,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flex: 0.7
    },
    priceContent: {
        marginStart: 1,
        justifyContent:"space-between",
        flex: 0.2
    },
    titleText: {
        fontFamily: "sans-serif",
        fontSize: 18,
        fontWeight:"bold",
        color:"#00b2ee",
        marginStart: 5,
    },
    categoryText: {
        fontFamily: "sans-serif-light",
        fontSize: 16,
    },
    priceText: {
        fontFamily: "sans-serif-light",
        color:"#a31",
        textDecorationLine:"line-through",
        fontSize: 15,
    },
    discountText: {
        fontFamily: "sans-serif-light",
        color:"#4a1",
        fontSize: 17,
        fontWeight:"bold"
    },
})
export default styles;
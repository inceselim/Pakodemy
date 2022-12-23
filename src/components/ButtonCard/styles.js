import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        padding:3,
        paddingBottom:3,
        paddingTop:3,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#ff0",
        justifyContent:"space-between",
        borderRadius:20,
        borderColor:"#ccc",
        borderWidth:1,
    },
    itemId:{
        borderRadius:160,
        padding:6,
        marginStart:3,
        backgroundColor: "#039be5",
        alignItems: "center",
        justifyContent: "center",
        flex: 0.1
    },
    textContent: {
        marginStart: 10,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flex: 0.7
    },
    priceContent: {
        marginStart: 1,
        flex: 0.2
    },
    titleText:{
        fontFamily:"Arial",
        fontSize:16,
    },
    categoryText:{
        fontFamily:"Arial",
        fontSize:13,
    },
})
export default styles;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        marginVertical: 5,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#ff0",
        justifyContent:"space-between",
        borderRadius:20
    },
    itemId:{
        borderRadius:160,
        padding:6,
        marginLeft:3,
        backgroundColor: "#039be5",
        alignItems: "center",
        justifyContent: "center"
    },
    textContent: {
        marginStart: 16,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flex: 1
    },
})
export default styles;
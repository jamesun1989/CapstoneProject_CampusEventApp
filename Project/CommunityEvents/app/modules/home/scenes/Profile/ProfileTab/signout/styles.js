import { StyleSheet } from 'react-native';
import { theme } from "../../../../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'flex-end',
        resizeMode: 'stretch'

    },
  
    bottomContainer:{
        backgroundColor:"white",
        paddingVertical: padding * 3,
        justifyContent: 'flex-end',
        color: 'tomato',

    },

    buttonContainer:{
        justifyContent:"flex-end",
        alignItems:"center",
    }
});

export default styles;
import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';

const color = {
    black: "#3B3031",
    light_black: "#414141",
    main: "rgb(99,139,250)",
    white: "#ffffff",
    light_grey: "#eaeaea",
    grey: "#ccc",
    red: "red",
    underlayColor: "#ddd"
}

const fontSize = {
    small: normalize(12),
    regular: normalize(14),
    large: normalize(21)
}

const fontFamily = {
    regular: "Roboto",
    medium: "Roboto_medium",
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "rgba(73,75,76, .5)" : "rgba(255,255,255,.8)";
const selectedTabColor = (Platform.OS === "ios") ? "rgb(73,75,76)" : "#fff";

const tabIconStyle = { style: {fontSize: 40, color: '#ffffff'}}
const navTitleStyle = { fontSize: fontSize.regular , fontFamily: fontFamily.regular, color: color.black }

const tabProps = {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    activeBackgroundColor: '#ef7f7f',
    inactiveBackgroundColor: '#ff4d4d',
    tabBarStyle: { backgroundColor: '#ff4d4d',
    height: 70 },
    labelStyle: {
        fontSize: 15,
        textAlign: "center",
        alignSelf: "center",
        activeTintColor: '#ffffff',
        inactiveTintColor: '#ffffff',
        color: '#ffffff'
    },
}

const eventtabIconStyle = { style: {fontSize: 30, color: '#000000'}}

const eventtabProps = {
    tabBarPosition: 'top',
    showLabel: false,
    showIcon: true,
    swipeEnabled: false,
    animationEnabled: false,
    scrollEnabled: false,
    lazyLoad: false,
    activeBackgroundColor: '#ffffff',
    inactiveBackgroundColor: '#ffffff',
    tabBarStyle: {
        backgroundColor: '#ffffff',
        height: 50
    }
}

const stackProps = {
    titleStyle: { 
        fontSize: 18,
        color: '#ffffff', 
        alignSelf: 'center'},
    navigationBarStyle: {
        backgroundColor: '#ff4d4d'
    }
}

const eventsProps = {
    titleStyle: {
        fontSize: 16,
        color: '#ffffff',
        alignSelf: 'center'},
        navigationBarStyle: {
        backgroundColor: '#ff4d4d'
    }
}

export {
    color,
    fontSize,
    fontFamily,
    padding,
    navbarHeight,
    windowWidth,
    windowHeight,
    tabIconStyle,
    navTitleStyle,
    normalize,
    tabProps,
    eventtabIconStyle,
    eventtabProps,
    stackProps,
    eventsProps
}
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Font, AppLoading } from 'expo';

import Router from './app/config/routes';
import store from './app/redux/store';

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
        }
    }

    async componentWillMount() {
        /*const fontAssets = cacheFonts([
            {RobotoExtraBold: require('./app/assets/fonts/Roboto-Black.ttf')},
            {RobotoBold: require('./app/assets/fonts/Roboto-Bold.ttf')},
            {RobotoMedium: require('./app/assets/fonts/Roboto-Medium.ttf')},
            {RobotoRegular: require('./app/assets/fonts/Roboto-Regular.ttf')},
            {RobotoLight: require('./app/assets/fonts/Roboto-Light.ttf')},
        ]);*/

        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("native-base/Fonts/Ionicons.ttf")
            });
        this.setState({ isReady: true });
        

        //await Promise.all([...fontAssets]);
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                />
            );
        }
        
        return (
            <Provider store={store}>
                    <Router/>
            </Provider>
        );
    }
}

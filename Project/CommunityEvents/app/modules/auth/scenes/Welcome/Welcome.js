import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import { Google } from 'expo';
import {Button, SocialIcon, Divider} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import {actions as auth, constants as c } from "../../index"
const { signInWithGoogle } = auth;

import styles from "./styles"

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {}

        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
        this.onSignInWithGoogle = this.onSignInWithGoogle.bind(this);
    }

    async onSignInWithGoogle(){
        try{
            const result = await Google.logInAsync({
                androidClientId: c.GOOGLE_SIGN_IN_ANDROID_ID,
                iosClientId: c.GOOGLE_SIGN_IN_IOS_ID,
                scopes: ['profile', 'email'],
            });

            if(result.type === 'success'){
                this.props.signInWithGoogle(result.idToken, result.accessToken, this.onSuccess, this.onError);
            }
        }catch(e) {
            return {error: true};
        }
    }

    onSuccess({ exists, user}) {
        if (exists) Actions.Main();
        else Actions.CompleteProfile({ user });
    }

    onError(error) {
        alert(error.message);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image style={styles.image} source={{uri: ""}}/>
                    <Text style={styles.title}>Welcome to Community Events!</Text>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={[styles.buttonContainer]}>
                        <SocialIcon
                            raised
                            button
                            type='google'
                            title='SIGN UP WITH GOOGLE'
                            iconSize={19}
                            style={[styles.containerView, styles.socialButton]}
                            fontStyle={styles.buttonText}
                            onPress={this.onSignInWithGoogle}/>

                        <View style={styles.orContainer}>
                            <Divider style={styles.divider}/>
                            <Text style={styles.orText}>
                                Or
                            </Text>
                        </View>

                        <Button
                            raised
                            borderRadius={4}
                            title={'SIGN UP WITH E-MAIL'}
                            containerViewStyle={[styles.containerView]}
                            buttonStyle={[styles.button]}
                            textStyle={styles.buttonText}
                            onPress={Actions.Register}/>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.bottomText}>
                            Already have an account?
                        </Text>

                        <TouchableOpacity onPress={Actions.Login}>
                            <Text style={styles.signInText}>
                                Sign in
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        );
    }
}


export default connect(null, { signInWithGoogle })(Welcome);
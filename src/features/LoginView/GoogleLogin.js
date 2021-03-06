import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SafeArea from '../../components/SafeArea';
import { theme } from '../../infrastructure/index';
import { BiteShareContext } from '../../BiteShareContext';
import * as Google from 'expo-google-app-auth';
import googleImg from '../../../assets/google-logo.png';
import { addANewAnonymousDocument, getADocReferenceFromCollection } from '../../../firebase/helpers/database.firebase';

const styles = StyleSheet.create({
  googleLogo: {
    height: 70,
    width: 70,
  }
});

const GoogleLogin = () => {
  const navigation = useNavigation();
  const { state: { nickname }, dispatch } = useContext(BiteShareContext);

  const signInAsync = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: '90738707092-9ik3l59ad22hfghgrms9ti5cgn2da675.apps.googleusercontent.com',
        // androidClientId: '<YOUR_ANDROID_CLIENT_ID>',
      });
      if (type === 'success') {
        dispatch({ type: 'SET_EMAIL', email: user.email });
        dispatch({ type: 'SET_ACCOUNT_HOLDER_NAME', accountHolderName: user.name });
        dispatch({ type: 'SET_NICKNAME', nickname: user.givenName });
        dispatch({ type: 'SET_ACCOUNT_TYPE', accountType: '' }); //reset the accountType to null
        dispatch({ type: 'SET_OPEN_CAMERA', openCamera: false }); //reset the openCamera
        try {
          const userDocs = await getADocReferenceFromCollection('users', 'email', '==', user.email);
          if (userDocs.size === 0) {
            await addANewAnonymousDocument('users', {
              name: user.name,
              email: user.email,
            });
          } else {
            await userDocs.forEach((doc) => dispatch({ type: 'SET_USER_ID', userId: doc.id }));
          }
        } catch (error) {
          console.log('Error creating new user in users collections when google sign in');
        }
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log('GoogleLogin.js 19 | error with login', error);
    }
  };

  return (
    <SafeArea>
      <TouchableOpacity onPress={signInAsync} >
        <Image style={styles.googleLogo} source={googleImg} />
      </TouchableOpacity>
    </SafeArea>
  );
};

export default GoogleLogin;
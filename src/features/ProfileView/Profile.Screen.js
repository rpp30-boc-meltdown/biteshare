import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SafeArea from '../../components/SafeArea';
import ProfileScreenHeader from './ProfileScreenHeader';
import ProfileGreeting from './Profile.Greeting';
import ProfileHistory from './Profile.History';
import SettingButton from './ProfileSettingsButton';

import Profile from './Profile';
import AccountScreen from './AccountSettings/Account.Screen';

import { colors } from '../../infrastructure/colors';
import { BiteShareContext } from '../../BiteShareContext';
import { signOutUser } from '../../../firebase/helpers/authentication.firebase';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',

  },
  greeting: {
    alignItems: 'center',
    flexDirection: 'column',
    height: 20,
    flex: 2
  },
  history: {

  },
  settings: {

  },
  logout: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    color: colors.brand.kazan,
    backgroundColor: colors.brand.beach,
  }
});

const ProfileScreen = () => {
  const { state: { authenticated }, dispatch } = useContext(BiteShareContext);
  const [currentPage, setCurrentPage] = useState('Profile');

  // const navigation = useNavigation();
  // const logout = () => {
  //   signOutUser()
  //     .then(() => {
  //       navigation.navigate('Login');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  //   dispatch({ type: 'SET_AUTH', authenticated: false });
  // };

  const renderAccountSettings = () => {
    return (
      <AccountScreen/>
    );
  };


  return (
    <SafeArea>
      <View >
        <ProfileScreenHeader />
        <View style={styles.container}>


          <Profile navPage={setCurrentPage}/>
          {currentPage !== 'Account' && renderAccountSettings()}




          {/* <ProfileGreeting style={styles.greeting}/>
          <ProfileHistory style={styles.history}/>
          <SettingButton style={styles.settings}/>
          <TouchableOpacity
            style={styles.logout}
            onPress={logout}>
            <Text>Logout</Text>
          </TouchableOpacity> */}

        </View>
      </View>
    </SafeArea>
  );
};

export default ProfileScreen;

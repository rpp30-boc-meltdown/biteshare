import React, { useContext, useState, useEffect} from 'react';
import { ActivityIndicator, StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
// import { Appbar, List, Button} from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../infrastructure/colors';
import { fonts } from '../../../infrastructure/fonts';
import { BiteShareContext } from '../../../BiteShareContext';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import mockParseMenu from '../../../../fixtures/mockParseMenu.json';
import Menu from './Menu';

const styles = StyleSheet.create({

  container: {
    // width: 400,
    height: '75%',
    margin: 5
    // backgroundColor: colors.brand.body,
  },

});

const SessionMenu = () => {

  const {state: { restaurantName, restaurantId, restaurantMenus}, dispatch } = useContext(BiteShareContext);
  // console.log('-------restaurantMenus--------', restaurantMenus);

  useEffect(() => {
    dispatch({ type: 'SET_RESTAURANT_MENU', restaurantMenus: mockParseMenu });
  }, [mockParseMenu]);

  const renderMenus = (menu) => {
    // console.log('---------------', menu);
    return (<Menu menu={menu} />);
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <ActivityIndicator size="small" color={colors.brand.darkBlue} /> */}
      {/* <Text> Render Menu</Text> */}
      <FlatList
        data={restaurantMenus}
        renderItem={renderMenus}
        keyExtractor={menu => menu.id}
        // horizontal={false}
        // numColumns={2}
      />
    </SafeAreaView>
  );


};

export default SessionMenu;
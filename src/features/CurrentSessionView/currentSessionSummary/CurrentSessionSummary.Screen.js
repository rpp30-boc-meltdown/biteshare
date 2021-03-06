import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BiteShareContext } from '../../../BiteShareContext.js';
import BiteshareButton from '../../../components/BiteshareButton.js';
import { colors } from '../../../infrastructure/colors.js';

import GuestList from './GuestList.js';
import SplitBillOptions from './SplitBillOptions.js';

const styles = (role) => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: role === 'HOST' ? '-5%' : '-50%',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    height: '10%',
  }
});

const CurrentSessionSummary = ({ changeTab }) => {
  const { state: { accountType, isEveryoneReady } } = useContext(BiteShareContext);
  const buttonStyle = isEveryoneReady ? { backgroundColor: colors.brand.beachLight, marginTop: '10%', width: 180 } : { marginTop: '10%', width: 180 };
  const title = isEveryoneReady ? 'Everyone is ready!' : 'Still waiting...';
  return (
    <View style={styles(accountType).container}>
      <Text style={styles(accountType).title}>Summary</Text>
      <GuestList />
      {accountType === 'HOST' && <BiteshareButton size={100} title={title} buttonStyle={buttonStyle} disabled/>}
      {accountType === 'HOST' && <SplitBillOptions changeTab={changeTab}/>}
    </View>
  );
};

export default CurrentSessionSummary;
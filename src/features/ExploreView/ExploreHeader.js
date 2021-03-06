import React, { useContext } from 'react';
import { Appbar, Avatar } from 'react-native-paper';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../../infrastructure/colors';
import { BiteShareContext } from '../../BiteShareContext';

const styles = StyleSheet.create({
  exploreHeader: {
    backgroundColor: colors.brand.kazan,
  },
  exploreHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24
  }
});

const ExploreHeader = () => {
  const { state: { nickname, accountHolderName }, dispatch } = useContext(BiteShareContext);
  const profilePicturePath = '../../../assets/profilePicture.png';
  return (
    <Appbar.Header style={styles.exploreHeader}>
      <View style={styles.exploreHeaderContainer}>
        <View>
          <Text style={styles.headerText}>Welcome {nickname || accountHolderName}</Text>
        </View>
        <View>
          <Avatar.Image
            source={require(profilePicturePath)}
            size = {40}
            style = {{backgroundColor: '#f2f2f2'}}
          />
        </View>
      </View>
    </Appbar.Header>
  );
};

export default ExploreHeader;
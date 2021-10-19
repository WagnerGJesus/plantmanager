import React from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../styles/colors';
import userImg from '../assets/avatar.png';
import fonts from '../styles/fonts';
const Header: React.FC = () => {
  return <View style={styles.container}>
    <View>
      <Text style={styles.greating}>Olá,</Text>
      <Text style={styles.userName}>Wagner</Text>
    </View>
      <Image source={userImg} style={styles.image}></Image>
  </View>;
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:20,
    marginTop: getStatusBarHeight(),
    padding: 20,
  },
  greating:{
    fontSize:32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName:{
    fontSize:32,
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  image:{
    width: 70,
    height: 70,
    borderRadius:35,
  },
})
export default Header;
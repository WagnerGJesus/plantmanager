import React from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';
import colors from '../styles/colors';
import userImg from '../assets/avatar.png';
import fonts from '../styles/fonts';
import {RectButton, RectButtonProps} from 'react-native-gesture-handler'
import { SvgFromUri } from 'react-native-svg';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}
const PlantCardPrimary = ({data,...rest}:PlantProps) => {
  return (
  <RectButton  style={styles.container} {...rest}>
    <SvgFromUri uri={data.photo} width={70} height={70}/>
    <Text style={styles.text}>{data.name}</Text>
  </RectButton>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    maxWidth: '45%',
    backgroundColor: colors.shape,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  },
  text:{
    fontFamily: fonts.heading,
    color: colors.green_dark,
    marginVertical: 16,

  },
  image:{
    width: 70,
    height: 70,
    borderRadius:35,
  },
})
export default PlantCardPrimary;
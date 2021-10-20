import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {RectButton, RectButtonProps} from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentoButtonProps extends RectButtonProps {
  title: string,
  active?: boolean,
}

export default function EnvironmentButton({title,active,...rest}:EnvironmentoButtonProps) {
  return (
    <RectButton 
    //concatenando estilos usando array caso ativo seja verdadeiro adiciona o outro estilo
    style={[styles.container, active && styles.containerActive]} 
    {...rest}>
    {/* concatenando estilos usando array caso ativo seja verdadeiro adiciona o outro estilo */}
      <Text 
      style={[styles.text, active && styles.textActive]}>
        {title}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems:'center',
    width: 67,
    height: 40,
    borderRadius: 12,
    marginHorizontal:5,
    backgroundColor:colors.shape,
  },
  containerActive:{
    backgroundColor: colors.green_light,
  },
  text:{
    fontFamily: fonts.text,
    color: colors.green_dark,
  },
  textActive:{
    fontFamily: fonts.heading,
    color: colors.green_dark,
  }
})

import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/index';

const CarItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.car;

  return (
      <View style={styles.carContainer}>

      <ImageBackground
        source={image}
        style={styles.image}/>

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline + ' '}
          <Text style={styles.ctaText}>{taglineCTA}</Text>
        </Text>

      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton type='primary' content='custom order' onPress = {() => {console.warn('Custom order was pressed')}}/>
        <StyledButton type='secondary' content='existing inventory' onPress={() => {console.warn('Existing inventory was pressed')}}/>
      </View>        

    </View>
  );
};

export default CarItem;
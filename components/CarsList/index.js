import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import cars from '../../assets/cars';
import CarItem from '../CarItem/index';

const CarList = (props) => {
    return(
        <View style = {styles.container}>
        
            <FlatList style = {styles.list}
                data = {cars}
                renderItem = {({item}) => <CarItem car = {item}/>}
                snapToAlignment = {'start'}
                decelerationRate = {'fast'}
                snapToInterval = {Dimensions.get('screen').height}
                showsVerticalScrollIndicator = {false}
            />

        </View>
    );
};

export default CarList;
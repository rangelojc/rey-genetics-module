import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import CustomText from '../components/primitive/CustomText';

import lessonList from '../assets/lessons/lessonList.json';

const styles =  StyleSheet.create({
    listContainer: {
        flex: 1,
    },
});

interface LessonListProps {

}


export default class LessonList extends Component<LessonListProps>{
    items: any;

    constructor(props: any){
        super(props);

        this.items = lessonList.map(l => {
            let text = `${l.name} - ${l.fileName}.tsx`;
            return <CustomText text={text} type="bold"/>
        })
    }


    public render(){
        return(
            <View>{ this.items }</View>
        )
    }
}
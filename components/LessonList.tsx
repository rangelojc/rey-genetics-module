import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from '@react-navigation/native';

import lessonList from '../assets/lessons/lessonList.json';

const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
    },
});

interface LessonListProps {
    styles: any;
}


export default class LessonList extends Component<LessonListProps>{
    items: any;
    style: any;

    constructor(props: any) {
        super(props);

        this.style = props.style;
        this.items = lessonList.map(l => {
            let text = `${l.name} - ${l.fileName}.tsx`;

            return <Link to={`/LessonViewScreen`}>{text}</Link>
        })
    }

    public render() {
        return (
            <View style={this.style.lessonList}>{this.items}</View>
        )
    }
}
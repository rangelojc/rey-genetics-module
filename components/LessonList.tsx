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
    style: any;

    constructor(props: any) {
        super(props);

        this.style = props.style;
    }

    public render() {
        let lessonItems = lessonList.map(l => {
            let text = `${l.title}: ${l.name}.tsx`;

            return <Link key={l.name} to={`/LessonView?lessonName=${l.name}`}>{text}</Link>
        })

        return (
            <View style={this.style.lessonList}>
                { lessonItems}
            </View>
        )
    }
}
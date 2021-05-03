import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from '@react-navigation/native';

import lessonList from '../assets/lessons/lessonList.json';
interface LessonListProps {
    style: any;
}
export default class LessonList extends Component<LessonListProps>{
    style: any;

    constructor(props: any) {
        super(props);

        this.style = props.style;
    }

    public render() {
        let lessonCount = 0;
        let lessonItems = lessonList.map(lesson => {
            lessonCount++;

            return (
                <Link key={lesson.name} to={`/LessonView?lessonName=${lesson.name}`}>
                    {`${lessonCount}. ${lesson.title}`}
                </Link>
            )
        })

        return (
            <View style={this.style}>
                {lessonItems}
            </View>
        )
    }
}
import React, { Component } from 'react';
import { View } from 'react-native';
import { Link } from '@react-navigation/native';

import lessonList from '../assets/lessons/lessonList.json';
export default class LessonList extends Component {
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
                <Link key={lesson.name} to={`/LessonView?lessonName=${lesson.name}&lessonTitle=${lesson.title}`}>
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
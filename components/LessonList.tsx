import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Link } from '@react-navigation/native';

import lessonList from '../assets/lessons/lessonList.json';
import { Button } from '@ui-kitten/components';

export default function LessonList(props: any) {
    let lessonCount = 0;
    let lessonItems = lessonList.map(lesson => {
        lessonCount++;

        return (
            <View style={styles.links} key={lesson.name}>
                <Link to={`/LessonView?lessonName=${lesson.name}&lessonTitle=${lesson.title}`}>
                    {`${lesson.title}`}
                </Link>

                {/* <Button>Read</Button> */}
            </View>
        )
    })

    return (
        <View style={props.style}>
            {lessonItems}
        </View>
    )
}


const styles = StyleSheet.create({
    links: {
        flex: 1,
        justifyContent: "center",
        height: 50,
        minHeight: 50,
        backgroundColor: "#ffffff",
        marginVertical: 1,
        paddingLeft: 10
    }
})
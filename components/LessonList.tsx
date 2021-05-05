import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Link, useLinkProps } from '@react-navigation/native';

import { Text, Button } from '@ui-kitten/components';

import GlobalStyles from '../styles/GlobalStyles';
import lessonList from '../assets/lessons/lessonList.json';

const LinkButton = ({ to, children }: any) => {
    const { onPress } = useLinkProps({ to });

    return (
        <Button
            onPress={onPress}
            style={styles.btnOpen}
            size='small'
        >
            {children}
        </Button>
    )

}

export default function LessonList(props: any) {
    let lessonCount = 0;
    let lessonItems = lessonList.map(lesson => {
        lessonCount++;

        return (
            <View style={styles.listItem} key={lesson.name}>
                <Text style={styles.title}>{`${lesson.title}`}</Text>

                <Text style={styles.description}>
                    {lesson.description}
                </Text>

                <LinkButton to={`/LessonView?lessonName=${lesson.name}&lessonTitle=${lesson.title}`}>
                    Study
                </LinkButton>
            </ View >
        )
    });



    return (
        <View style={props.style}>
            {lessonItems}
        </View>
    )
}


const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        justifyContent: "center",
        minHeight: 100,
        backgroundColor: "#ffffff",
        marginVertical: 1,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    title: {
        ...GlobalStyles.text,
        fontSize: 22,
        fontWeight: "500",
    },
    description: {
        ...GlobalStyles.text,
        color: "#949292"
    },
    btnOpen: {
        marginTop: 10,
        width: 60,
    },
})
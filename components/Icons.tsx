import React, { Component } from 'react';
import { StyleSheet } from 'react-native';


import { Icon } from '@ui-kitten/components';


export default {
  Book: (props: any) => <Icon name='book-outline' {...props} />,
  Setting: (props: any) => <Icon name='settings-outline' {...props} />,
  Pen: (props: any) => <Icon name='edit-outline' {...props} />,
  Back: (props: any) => (<Icon {...props} name='arrow-back' />),
  Question: (props: any) => (<Icon {...props} name='question-mark-outline' />),
}
import React, { Component } from 'react';

import { Icon } from '@ui-kitten/components';

export default {
  Book: (props: any) => <Icon  {...props} name='book-outline' />,
  BookOpen: (props: any) => <Icon  {...props} name='book-open-outline' />,
  Bookmark: (props: any) => <Icon  {...props} name='bookmark-outline' />,
  Setting: (props: any) => <Icon  {...props} name='settings-outline' />,
  Pen: (props: any) => <Icon  {...props} name='edit-outline' />,
  Back: (props: any) => <Icon {...props} name='arrow-back' />,
  Question: (props: any) => <Icon {...props} name='question-mark-outline' />,
  Video: (props: any) => <Icon {...props} name='film-outline' />,
  Menu: (props: any) => <Icon {...props} name='menu-outline' />,
  Home: (props: any) => <Icon {...props} name='home-outline' />,
  Close: (props: any) => <Icon {...props} name='close-outline' />,
  Minimize: (props: any) => <Icon {...props} name='minimize-outline' />,

  Next: (props: any) => <Icon {...props} name='arrow-right-outline' />,
  Previous: (props: any) => <Icon {...props} name='arrow-left-outline' />,
  Star: (props: any) => <Icon {...props} name='star' />,
}
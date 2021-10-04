import React, { Component } from 'react';

import { Icon } from '@ui-kitten/components';

export default {
  Book: (props: any) => <Icon  {...props} name='book-outline' />,
  Setting: (props: any) => <Icon  {...props} name='settings-outline' />,
  Pen: (props: any) => <Icon  {...props} name='edit-outline' />,
  Back: (props: any) => <Icon {...props} name='arrow-back' />,
  Question: (props: any) => <Icon {...props} name='question-mark-outline' />,
  Video: (props: any) => <Icon {...props} name='film-outline' />,
  Menu: (props: any) => <Icon {...props} name='menu-outline' />,
}
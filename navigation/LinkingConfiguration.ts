import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Lesson: {
            screens: {
              LessonScreen: 'lesson',
            },
          },
          Quiz: {
            screens: {
              QuizScreen: 'quiz',
            },
          },
          Setting: {
            screens: {
              SettingScreen: 'setting',
            },
          }
        },
      }
    },
  },
};

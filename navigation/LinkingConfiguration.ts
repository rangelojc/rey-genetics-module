import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Lesson: {
            screens: {
              LessonScreen: 'Lessons',
              LessonViewScreen: 'LessonView'
            },
          },
          Quiz: {
            screens: {
              QuizScreen: 'Quizzes',
            },
          },
          Setting: {
            screens: {
              SettingScreen: 'Settings',
            },
          }
        },
      }
    },
  },
};

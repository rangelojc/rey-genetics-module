import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Main: {
        screens: {
          Lesson: {
            screens: {
              LessonScreen: 'Lessons'
            },
          },
          Activities: {
            screens: {
              ActivityScreen: 'Activities',
            },
          },
          Setting: {
            screens: {
              SettingScreen: 'Settings',
            },
          }
        },
      },
      LessonView: {
        screens: {
          LessonViewScreen: 'LessonView'
        }
      },
      ActivityOpen: {
        screens: {
          ActivityOpenScreen: 'ActivityOpen'
        }
      }
    },
  },
};

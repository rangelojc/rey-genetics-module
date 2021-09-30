import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      FirstOpen: {
        screens: {
          FirstOpenScreen: 'FirstOpen'
        }
      },
      Start: {
        screens: {
          StartScreen: 'Start'
        }
      },
      Menu: {
        screens: {
          MenuScreen: 'Menu'
        }
      },
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
          Videos: {
            screens: {
              VideoScreen: 'Videos',
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
      },
      VideoOpen: {
        screens: {
          ActivityOpenScreen: 'VideoOpen'
        }
      }
    },
  },
};

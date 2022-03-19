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
          Videos: {
            screens: {
              VideoScreen: 'Videos',
            },
          },
          Activities: {
            screens: {
              ActivityScreen: 'Activities',
            },
          },
          Quizzes: {
            screens: {
              QuizScreen: 'Quizzes',
            },
          },
          References: {
            screens: {
              ReferenceScreen: 'References',
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
      QuizOpen: {
        screens: {
          QuizOpenScreen: 'QuizOpen'
        }
      },
      VideoOpen: {
        screens: {
          ActivityOpenScreen: 'VideoOpen'
        }
      },
      Setting: {
        screens: {
          SettingScreen: 'Setting'
        }
      }
    },
  },
};

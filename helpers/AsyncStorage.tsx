import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  set: async function (key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value)
    }
    catch (ex) {
      console.error(ex)
    }
  },
  get: async function (key: string, defaultValue?: string) {
    try {
      const value = await AsyncStorage.getItem(key)
      return value || defaultValue;

    }
    catch (ex) {
      console.error(ex)
    }
  }
}
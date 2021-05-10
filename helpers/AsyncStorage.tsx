import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_NAME = '@RGMStore:';

export default {
  set: async function (key: string, value: string) {
    try {
      await AsyncStorage.setItem(STORE_NAME + key, value)
    }
    catch (ex) {
      console.error(ex)
    }
  },
  get: async function (key: string, defaultValue?: string) {
    try {
      const value = await AsyncStorage.getItem(STORE_NAME + key)
      return value || defaultValue;

    }
    catch (ex) {
      console.error(ex)
    }
  }
}
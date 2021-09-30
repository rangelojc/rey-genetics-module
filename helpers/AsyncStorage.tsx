import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_NAME: any = '@RGMStore:';
const STORE_KEYS: any = {
  "firstName": "rgm_firstName",
  "lastName": "rgm_lastName",
  "firstOpen": "rgm_firstOpen",
  "avatar": "rgm_avatar"
};

export default {
  set: async function (key: string, value: string) {
    try {
      await AsyncStorage.setItem(STORE_NAME + STORE_KEYS[key], value)
    }
    catch (ex) {
      console.error(ex)
    }
  },
  get: async function (key: string, defaultValue?: string) {
    try {
      const value = await AsyncStorage.getItem(STORE_NAME + STORE_KEYS[key] + key)
      return value || defaultValue;

    }
    catch (ex) {
      console.error(ex)
    }
  }
}
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORE_NAME: any = '@RGMStore:';
const STORE_KEYS: any = {
  "firstName": "rgm_firstName",
  "lastName": "rgm_lastName",
  "firstOpen": "rgm_firstOpen",
  "avatar": "rgm_avatar"
};

export default {
  check: function (key: string) {
    return STORE_KEYS[key] ? true : false;
  },
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
      const value = await AsyncStorage.getItem(STORE_NAME + STORE_KEYS[key])
      return value || defaultValue;

    }
    catch (ex) {
      console.error(ex)
    }
  }
}
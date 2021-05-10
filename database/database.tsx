import { Asset, FileSystem } from 'expo';
import * as SQLite from 'expo-sqlite';


const DB_ORIGIN = "local.db";
const DB_NAME = "geneticsModule.db";
const DB_VER = "1.0";
const DB_DISPLAYNAME = "React native offline db";
const DB_SIZE = 200000;
export default class Database {
  database: any;


  public open1() {
    this.database = SQLite.openDatabase(
      DB_NAME,
      DB_VER,
      DB_DISPLAYNAME,
      DB_SIZE
    );
  }

  public async open() {
    if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
    }
    await FileSystem.downloadAsync(
      Asset.fromModule(require(DB_ORIGIN)).uri,
      FileSystem.documentDirectory + '' + DB_NAME
    );
    return SQLite.openDatabase(DB_NAME);
  }

  public exec(callback: any, err: any, success: any) {
    this.database.transaction(
      callback,
      (ex: any) => {
        console.error(ex)
      },
      (res: any) => {
        console.log(res)
      })
  }
}
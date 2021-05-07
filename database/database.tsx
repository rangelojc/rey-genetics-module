import SQLite from "react-native-sqlite-storage";

SQLite.DEBUG(true);
SQLite.enablePromise(true);

const DB_NAME = "local.db";
const DB_VER = "1.0";
const DB_DISPLAYNAME = "SQLite React Offline Database";
const DB_SIZE = 200000;

export default class Database {

}
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("militaryRule.db", "4.0");

export const initPurchaseDB = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS purchased (id number);",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
};

export const insertPurchase = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO purchased (id) VALUES(?)",
        [1],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectPurchase = () => {
  const prom = new Promise((resolve, reject) => {
    const result = db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM purchased",
        [],
        (_, result) => {
          // console.log(result.rows);
          resolve(result.rows);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  // return result;
  return prom;
};

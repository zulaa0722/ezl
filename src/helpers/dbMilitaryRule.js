import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("militaryRule.db", "3.0");

export const initDB = () => {
  const promise = new Promise((revolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tbTitles (id number, duremID number, bulegID number, name text);",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tbTests (id number, duremID number, bulegID number, question text, ans1 text, ans2 text, ans3 text, ans4 text, true_answer text, questionZaalt text,);",
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

export const insertTitles = (titles) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      titles.map((item) => {
        tx.executeSql(
          "INSERT INTO tbTitles (id, duremID, bulegID, name) VALUES(?, ?, ?, ?)",
          [item.ID, item.DUREM_ID, item.BULEG_ID, item.TITLE_NAME],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
  });

  return promise;
};

export const selectTitles = (disId) => {
  const result = db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM tbTitles WHERE duremID = ?",
      [disId],
      (_, result) => {
        result.rows;
      },
      (_, err) => {
        err;
      }
    );
  });
  return result;
};

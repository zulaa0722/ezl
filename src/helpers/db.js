import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("gsmaf.db", "3.0");

export const initDb = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS tbArticle;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tbArticle (id number, lawID number, parentID number, articleName text);",
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

  return promise;
};

export const insertCatigory = (catigories) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      catigories.map((item) => {
        tx.executeSql(
          "INSERT INTO tbCatigory (disId, catId, catName) VALUES(?, ?, ?)",
          [item.DUREM_ID, item.BULEG_ID, item.TITLE_NAME],
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

export const selectCatigory = (disId) => {
  const result = db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM tbCatigory WHERE disId = ?",
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

export const insertQuestion = (questions) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      questions.map((item) => {
        tx.executeSql(
          "INSERT INTO tbQuestions (id, disId, catId, question, ans1, ans2, ans3, ans4, trueAnswer, quesExplain) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
          [
            item.ID,
            item.DUREM_ID,
            item.BULEG_ID,
            item.QUESTION,
            item.ANS1,
            item.ANS2,
            item.ANS3,
            item.ANS4,
            item.TRUE_ANSWER,
            item.QUESTION_ZAALT,
          ],
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

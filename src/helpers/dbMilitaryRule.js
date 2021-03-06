import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("militaryRule.db", "4.0");

export const initDB = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS tbTitles;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
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
    });
  });
};
export const initDB1 = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS tbTests;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tbTests (id number, duremID number, bulegID number, question text, ans1 text, ans2 text, ans3 text, ans4 text, true_answer text, questionZaalt text);",
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

export const initDBMilitaryRuleData = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "DROP TABLE IF EXISTS tbMilitaryRuleData;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tbMilitaryRuleData (id number, duremID number, bulegID number, mainInfo text);",
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
  const prom = new Promise((resolve, reject) => {
    const result = db.transaction((tx) => {
      tx.executeSql(
        "SELECT *, (SELECT COUNT(*) FROM tbTests as t2 WHERE t2.bulegID=t1.bulegID) as 'count' FROM tbTitles as t1 WHERE duremID=?",
        [disId],
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

export const insertQuestions = (questions) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      questions.map((item) => {
        tx.executeSql(
          "INSERT INTO tbTests (id, duremID, bulegID, question, ans1, ans2, ans3, ans4, true_answer, questionZaalt) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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

export const selectQuestions = () => {
  const prom = new Promise((resolve, reject) => {
    const result = db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tbTests ORDER BY RANDOM() LIMIT 25",
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

export const selectQuestionsByDurem = (chapterID) => {
  const prom = new Promise((resolve, reject) => {
    const result = db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tbTests WHERE bulegID = ?",
        [chapterID],
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

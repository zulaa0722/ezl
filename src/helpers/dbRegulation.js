import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("ReactApp", "3.0");

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

      tx.executeSql(
        "DROP TABLE IF EXISTS tbLaws;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tbLaws (id number, articleID number, laws text);",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );

      tx.executeSql(
        "DROP TABLE IF EXISTS tbLawType;",
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS tbLawType (id number, lawID number, lawName text, lawPic text, isDurem number);",
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
  // console.log("tables created");
  return promise;
};
export const insertLaws = (laws) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      laws.map((item) => {
        // console.log(item.ARTICLE_ID);
        tx.executeSql(
          "INSERT INTO tbLaws (id, articleID, laws) VALUES(?, ?, ?)",
          [item.ID, item.ARTICLE_ID, item.LAW],
          (_, result) => {
            // console.log(result.rows._array);

            resolve(result);
          },
          (_, err) => {
            reject("errr---" + err);
          }
        );
      });
    });
  });

  return promise;
};
export const insertLawTypes = (lawTypes) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      lawTypes.map((item) => {
        tx.executeSql(
          "INSERT INTO tbLawType (id, lawID, lawName, lawPic, isDurem) VALUES(?, ?, ?, ?, ?)",
          [item.id, item.lawID, item.lawName, item.lawPic, item.isDurem],
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
export const insertArticles = (articles) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      articles.map((item) => {
        tx.executeSql(
          "INSERT INTO tbArticle (id, lawID, parentID, articleName) VALUES(?, ?, ?, ?)",
          [item.ID, item.LAW_ID, item.PARENT_ID, item.ARTICLE_NAME],
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
export const selectArticles = (id) => {
  const prom = new Promise((resolve, reject) => {
    const result = db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tbArticle WHERE lawID = ?",
        [id],
        (_, result) => {
          resolve(result.rows);
          // console.log(result.rows);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return prom;
};
export const selectLawTypes = (isDurem) => {
  const prom = new Promise((resolve, reject) => {
    const result = db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tbLawType WHERE isDurem = ?",
        [isDurem],
        (_, result) => {
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
export const selectLaws = (articleID) => {
  const prom = new Promise((resolve, reject) => {
    const result = db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tbLaws WHERE articleID=?",
        [articleID],
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
export const getParentNodes = (lawID) => {
  const prom = new Promise((resolve, reject) => {
    const result = db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM tbArticle WHERE lawID=? AND parentID=0",
        [lawID],
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

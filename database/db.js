import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('users.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, email TEXT NOT NULL, password TEXT NOT NULL);',
          [],
          () => {
            resolve();
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
  };

export const InsertNewUser = (email, password) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO users (email, password) VALUES (?, ?)',
                [email, password],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            );
        })
    })
    return promise;
}

export const fetchUser = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM users',
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
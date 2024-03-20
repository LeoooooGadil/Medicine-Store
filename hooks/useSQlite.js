import { useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";

const useSQLite = (dbName, tableName) => {
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    const db = SQLite.openDatabase(dbName);
    setDatabase(db);

    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT);`,
        [],
        () => console.log("Table created successfully"),
        (_, error) => console.error("Error creating table: ", error)
      );
    });

    return () => {
      if (db) {
        db.close();
      }
    };
  }, [dbName, tableName]);

  const insertData = (data, callback) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${tableName} (data) VALUES (?);`,
        [JSON.stringify(data)],
        (_, result) => {
          console.log("Data inserted successfully");
          callback(result);
        },
        (_, error) => console.error("Error inserting data: ", error)
      );
    });
  };

  const selectData = (callback) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${tableName};`,
        [],
        (_, { rows }) => {
          const data = [];
          for (let i = 0; i < rows.length; i++) {
            data.push(JSON.parse(rows.item(i).data));
          }
          callback(data);
        },
        (_, error) => console.error("Error selecting data: ", error)
      );
    });
  };

  const updateData = (id, newData, callback) => {
    database.transaction((tx) => {
      tx.executeSql(
        `UPDATE ${tableName} SET data = ? WHERE id = ?;`,
        [JSON.stringify(newData), id],
        (_, result) => {
          console.log("Data updated successfully");
          callback(result);
        },
        (_, error) => console.error("Error updating data: ", error)
      );
    });
  };

  const deleteData = (id, callback) => {
    database.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ${tableName} WHERE id = ?;`,
        [id],
        (_, result) => {
          console.log("Data deleted successfully");
          callback(result);
        },
        (_, error) => console.error("Error deleting data: ", error)
      );
    });
  };

  return { insertData, selectData, updateData, deleteData };
};

export default useSQLite;

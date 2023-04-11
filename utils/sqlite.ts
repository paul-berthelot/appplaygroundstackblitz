import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { Sequelize } from 'sequelize';

export async function getDbConnection() {
  try {
    const db = await open({
      // filename: ':memory:',
      filename: '.data/database.sqlite',
      driver: sqlite3.Database,
    });
    return db;
  } catch (e) {
    // setup a new database
    // need sequelize to create in a web container
    const sequelize = new Sequelize('database', '', '', {
      dialect: 'sqlite',
      storage: '.data/database.sqlite',
      logging: false,
    });
    const RandomTable = sequelize.define('randomtable', {
      myattribute: {
        type: Sequelize.STRING,
      },
    });
    await RandomTable.sync({ force: true });
    const db = await open({
      // filename: ':memory:',
      filename: '.data/database.sqlite',
      driver: sqlite3.Database,
    });
    return db;
  }
}

export async function initializeDatabase(db) {
  await db.exec(\`
    CREATE TABLE IF NOT EXISTS example_table (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      data TEXT NOT NULL
    );
  \`);
}
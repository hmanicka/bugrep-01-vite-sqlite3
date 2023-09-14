import sqlite3 from 'sqlite3';

/// Initialize database with options
const options = {
  debug: false,
  verbose: true,
  db: ':memory:',
};

let driver = options.verbose ? sqlite3.verbose() : sqlite3;
let db = new driver.Database(options.db, (err) => {
  if (err) {
    if (options.verbose) {
      console.log(`Could not connect to database: ${options.db}`, err);
    }
    throw err;
  } else {
    if (options.verbose) {
      console.log('Connected to database, listing tables:');
      db.all("SELECT name FROM sqlite_master WHERE type='table'", [], (err, tables) => {
        console.log(tables);
      });
    }  
  }
});


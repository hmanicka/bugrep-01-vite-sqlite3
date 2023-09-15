import sqlite3 from 'sqlite3';
import { building } from '$app/environment';

/// Initialize database with options
const options = {
  debug: false,
  verbose: true,
  db: ':memory:',
};

/*
 Fix for: FATAL ERROR: Error::Error napi_define_properties
 caused during build
*/
if (!building) {
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
}


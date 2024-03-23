
module.exports = {
  "development": {
    "username": "root",
    "password":  "root",
    "database": "gamersCostumes",
    "host": "127.0.0.1",
    "dialect": "mysql"

  },
  "test": {
    "username": process.env.DB_USER,
    "password":  process.env.DB_PASSWORD,
    "database": "gamerscostumes",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_USER,
    "password":  process.env.DB_PASSWORD,
    "database": "gamerscostumes",
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  }
}

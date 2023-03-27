# Create a config.js file at root level with following contents in it

```
const config = {
  db: {
    /* don't expose password or any sensitive info, done only for demo */
    host: "hostname",
    user: "username",
    password: "password",
    database: "dbname",
  },
  listPerPage: 10,
};
module.exports = config;

```
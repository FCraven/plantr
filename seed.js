const db = require("./models");

db.sync({ force: true })
  .then(() => {
    console.log("db success");
  })
  .catch(error => {
    console.log("ERROR:", error);
  })
  .finally(() => {
    console.log("CLOSING");
    db.close();
  });

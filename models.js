//First, we need to create a Sequelize instance, representing our connection to the database. Write this in models.js. See if you can do it on your own (but feel free to reference the docs)! Note that we want to connect to 'postgres://localhost:5432/plantr'. Don't forget to export it as well!

const Sequelize = require("sequelize");
const pgh = require("pg-hstore");
const db = new Sequelize("postgres://localhost:5432/plantr");

const Gardener = db.define("gardener", {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER
});

const Plot = db.define("plot", {
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN
});

const Vegetable = db.define("vegetable", {
  name: Sequelize.STRING,
  color: Sequelize.STRING,
  plantedOn: Sequelize.DATE
});

module.exports = db;

Vegetable.belongsToMany(Plot, { through: "plot/vegetable" });
Plot.belongsToMany(Vegetable, { through: "plot/vegetable" });
Gardener.belongsTo(Vegetable, { as: "favoriteVegetable" });

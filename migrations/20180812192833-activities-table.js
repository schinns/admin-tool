"use strict";

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  return db.createTable("activities", {
    id: {
      type: "int",
      primaryKey: true,
      autoIncrement: true
    },
    description: "varchar",
    date: "timestamp",
    taken_place: "boolean"
  })
};

exports.down = function(db) {
  return db.dropTable("activities");
};

exports._meta = {
  "version": 1
};

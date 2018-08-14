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
  return db.createTable("ym", {
    id: {
      type: "int",
      primaryKey: true,
      autoIncrement: true
    },
    name: "text",
    group: "int",
    email: "text",
    phone: "text",
    birthday: "timestamp",
    prefer_email: "boolean"
  })
};

exports.down = function(db) {
  return db.dropTable("ym");
};

exports._meta = {
  "version": 1
};

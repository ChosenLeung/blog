var settings = require('../setting'),
    Db = require('mongodb').db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;

module.exports = new Db(settings.db, new Server(settings.host, Connection.DEFAULT_PORT), {safe:true});
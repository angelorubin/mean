'use strict';
const express = require('express');
module.exports = function() {
    const app = express();
    app.set('view engine', 'ejs');
    app.set('views', './app/views');
    // port
    app.set('port', 3000);
    // middleware
    app.use(express.static('./public'));
    return app;
};
/**
 * OPENSHIFT
 * MongoDB 2.4 database added.  Please make note of these credentials:

   Root User:     admin
   Root Password: YeksJRzNv6WG
   Database Name: mean

Connection URL: mongodb://$OPENSHIFT_MONGODB_DB_HOST:$OPENSHIFT_MONGODB_DB_PORT/
 */
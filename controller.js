'use strict';

let response = require('./rest');
let connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("App Running Success")
};
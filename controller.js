'use strict';

let response = require('./rest');
let connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("App Running Success", res)
};

// menampilkan semua list mahasiswa
exports.getAllMhs = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fileds){
        if(error){
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

// menampilkan list mahasiswa by id
exports.getMhsById = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM mahasiswa WHERE id_mhs = ?', [id],
        function(error, rows, fileds){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res)
            }
    });
};
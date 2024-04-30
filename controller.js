'use strict';

let response = require('./rest');
let connection = require('./koneksi');

exports.index = function(req,res){
    response.ok("App Running Success", res)
};

// menampilkan semua list mahasiswa
exports.getAllMhs = function(req,res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
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
        function(error, rows, fields){
            if(error){
                console.log(error);
            } else {
                response.ok(rows, res)
            }
    });
};

// menambahkan data mahasiswa
exports.addMhs = function(req,res){
    let nim = req.body.nim;
    let nama = req.body.nama;
    let jurusan = req.body.jurusan;

    connection.query('INSERT INTO mahasiswa (nim_mhs, nama_mhs, jurusan_mhs) VALUES(?,?,?)',
    [nim, nama, jurusan],
    function(error, rows, fields){
        if(error){
            console.log(error);
        } else {
            response.ok("Add Data Success", res)
        }
    });
};
'use strict';

module.exports = function(app) {
    let myjson = require('./controller')

    app.route('/')
        .get(myjson.index);

    app.route('/getListMhs')
        .get(myjson.getAllMhs);
    
    app.route('/getIdMhs/:id')
        .get(myjson.getMhsById);
}
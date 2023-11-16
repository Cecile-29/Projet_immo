module.exports = (app) => {

    app.get('/', (request, response) => {
       // response.render('index');
       let objController = require('../src/controllers/HomeControllers.js')
        objController.index(request, response)
    });

} 
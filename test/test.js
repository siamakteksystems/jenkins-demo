var request = require('supertest');


describe('GET /', function() {
    let server;

    beforeEach(() => { server = require('../index'); })
    afterEach(async () => { 
        await server.close(); 
    });

    it('respond with hello world', function(done) {
    //navigate to root and check the the response is "hello world"
        request(server).get('/').expect('Hello World', done);
    });
}); 
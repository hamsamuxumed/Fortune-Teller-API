const app = require('../server.js');

describe('api routes', () => {
    let fortuneApi;

    beforeAll(() => {
        fortuneApi = app.listen(5000, () => {
            console.log('Fortune API running on 5000');
        })
    });

    afterAll((done) => {
        console.log('Stopping server');
        fortuneApi.close(done);
    });

    test('GET / returns a message', (done) => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
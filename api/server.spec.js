const request = require('supertest');
const server = require('./server');

describe('server.js', ()=>{
    it('should set the esting env',()=>{
        expect(process.env.DB_ENV).toBe('testing');
    })
    
        describe('GET /', ()=>{
        //return code
        //return type
        //body shape/structure

        it('should return 200 OK', ()=>{
            return request(server).get('/')
                .then(res =>{
                    expect(res.status).toBe(200)
                });
        });

        it('should return 200 ok', async ()=>{
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should return {api:up}', async ()=>{
            const res = await request(server).get('/');
            expect(res.body).toEqual({api:'up'});
        });
    });



})

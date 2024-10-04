import request from 'supertest';

describe( "Connection to server", () => {
    it("Get/ should return Welcome to our chat app", async () => {
        const response = await request(app).get('/')
        expect(response.body).toEqual('Welcome to our chat app')
    })
})
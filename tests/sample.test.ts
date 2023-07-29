import * as supertest from 'supertest';
import app from "../src/app";

let server : any;
const request = supertest.default;
const port = process.env.APP_PORT || 3000;

beforeAll(() => {
    server = app.listen(port);
});

afterAll(() => {
    server.close();
});

it('mostrar 404 al listar un documento con un id no numérico', async() =>
{
    const response = await request(app).get('/tiposdoc/waka');

    expect(response.statusCode).toBe(400);
    expect(response.body.errors).not.toBeNull();
    expect(response.body.errors[0]).toEqual({
        "type": "field",
        "value": "waka",
        "msg": "El parámetro ingresado no es válido",
        "path": "id",
        "location": "params"
    });
});

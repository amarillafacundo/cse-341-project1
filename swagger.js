const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Temples Api',
        description: 'Team project for week 2'
    },
    host: 'localhost:8080',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
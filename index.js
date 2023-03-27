// Create an express server that serve the buscador.js javascript file

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    //Serves the buscador.js file
    res.sendFile(__dirname + '/buscador.js');

    }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// The command to get the server up is: node index.js



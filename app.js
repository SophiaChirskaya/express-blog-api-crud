const express = require('express')
const app = express()
const port = 3000
const postsRouter = require('./routers/posts');

// Importo il middleware di gestione errore server
const errorHandler = require("./middlewares/errorsHandler");

// Definizione d'uso di una cartella per i file statici
app.use(express.static('public'));

app.use(express.json());

// Definizone di rotta home
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

// Utilizziamo le rotta delle pizze definendo la parte iniziale delle rotte
app.use("/posts", postsRouter)

// Utilizzo il middleware di gestione errore server
app.use(errorHandler);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    
});
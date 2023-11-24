const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;
const produtos = [];


app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});


app.get('/meusprodutos', (req, res) => {
    console.log(produtos);
    res.render('meusprodutos', { produtos });
});

app.post('/cadastrar', (req, res) => {
    
    const { nomeProduto, 
        nomeFornecedor, dataCompra, valorCompra, valorVenda, categoria } = req.body;

    
    const novoProduto = {
        nomeProduto,
        nomeFornecedor,
        dataCompra,
        valorCompra,
        valorVenda,
        categoria,
    };
    
    res.render('viewuser', { user: user })
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


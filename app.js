const express = require('express');
const cors = require('cors');
const produtController = require('./controllers/produtController');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(produtController);

app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
})

import express from 'express';
import cors from 'cors';
import { loadPage } from "./packages/server/products.js";
const app = express();
const port = 3000;

app.use(cors());

// Add artificial delay to requests to simulate an actual network request
app.use(function(req,res,next){ setTimeout(next,1000) });

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/products/:page', async (req, res) => {
  // await new Promise(r => setTimeout(r, 1000));
  const products = loadPage(req.params.page);
  res.send({ items: products, totalPages: 10 })
});

app.use(express.static('./public'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
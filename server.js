import express from 'express';
import cors from 'cors';
import { loadPage, loadItem, loadRelatedProducts, getPageCount } from "./packages/server/products.js";
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

const cart = new Set();

// Add artificial delay to requests to simulate an actual network request
app.use(function(req,res,next){ setTimeout(next,250) });

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/products/:page', async (req, res) => {
  const products = loadPage(req.params.page);
  const pageCount = getPageCount();
  res.send({ items: products, totalPages: pageCount })
});


app.get('/product/:productId', async (req, res) => {
  const product = loadItem(req.params.productId);
  res.send({ product })
});

app.get('/related', async (req, res) => {
  const related = loadRelatedProducts();
  res.send({ related })
});

app.post('/addToCart', (req, res) => {
  const productId = req.body.productId;

  cart.add(productId);
  setTimeout(() => {
    res.send({ cart: Array.from(cart).map(productId => loadItem(Number(productId))) });
  }, 500)
  
})

app.delete('/clearCart', (req, res) => {
  cart.clear();
  res.send({ cart: Array.from(cart) });
})

app.get('/getCart', (req, res) => {
  res.send({ cart: Array.from(cart).map(productId => loadItem(Number(productId))) });
})

const oneHour = 3600000;
app.use(express.static('./public', { maxAge: oneHour }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
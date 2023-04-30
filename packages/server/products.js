const products = [
  {
    id: 1,
    name: "Basic",
    price: "42.00",
    image:
      "http://localhost:3000/images/products/basic.png"
  },
  {
    id: 2,
    name: "Bike",
    price: "51.00",
    image:
      "http://localhost:3000/images/products/bike.png"
  },
  {
    id: 3,
    name: "Brass",
    price: "47.00",
    image:
      "http://localhost:3000/images/products/brass.png"
  },
  {
    id: 4,
    name: "Classic",
    price: "72.00",
    image:
      "http://localhost:3000/images/products/classic.png"
  },
  {
    id: 5,
    name: "Cutlery",
    price: "99.00",
    image:
      "http://localhost:3000/images/products/cutlery.png"
  },
  {
    id: 6,
    name: "Elegant",
    price: "65.00",
    image:
      "http://localhost:3000/images/products/elegant.png"
  },
  {
    id: 7,
    name: "Empty",
    price: "66.00",
    image:
      "http://localhost:3000/images/products/empty.png"
  },
  {
    id: 8,
    name: "Forest",
    price: "60.00",
    image:
      "http://localhost:3000/images/products/forest.png"
  },
  {
    id: 9,
    name: "Garden",
    price: "56.99",
    image:
      "http://localhost:3000/images/products/garden.png"
  },
  {
    id: 10,
    name: "Green",
    price: "49.00",
    image:
      "http://localhost:3000/images/products/green.png"
  },
  {
    id: 11,
    name: "Industrial",
    price: "45.00",
    image:
      "http://localhost:3000/images/products/industrial.png"
  },
  {
    id: 12,
    name: "Marble",
    price: "75.00",
    image:
      "http://localhost:3000/images/products/marble.png"
  },
  {
    id: 13,
    name: "Mini Grand",
    price: "56.25",
    image:
      "http://localhost:3000/images/products/mini-grand.png"
  },
  {
    id: 14,
    name: "Minimal",
    price: "57.00",
    image:
      "http://localhost:3000/images/products/minimal.png"
  },
  {
    id: 15,
    name: "Modeern",
    price: "84.00",
    image:
      "http://localhost:3000/images/products/modeern.png"
  },
  {
    id: 16,
    name: "Modern",
    price: "60.00",
    image:
      "http://localhost:3000/images/products/modern.png"
  },
  {
    id: 17,
    name: "Neon",
    price: "59.00",
    image:
      "http://localhost:3000/images/products/neon.png"
  },
  {
    id: 18,
    name: "Orange",
    price: "57.00",
    image:
      "http://localhost:3000/images/products/orange.png"
  },
  {
    id: 19,
    name: "Quirky",
    price: "32.00",
    image:
      "http://localhost:3000/images/products/quirky.png"
  },
  {
    id: 20,
    name: "Seconds",
    price: "69.00",
    image:
      "http://localhost:3000/images/products/seconds.png"
  },
  {
    id: 21,
    name: "Simple",
    price: "69.00",
    image:
      "http://localhost:3000/images/products/simple.png"
  },
  {
    id: 22,
    name: "Slate",
    price: "77.00",
    image:
      "http://localhost:3000/images/products/slate.png"
  },
  {
    id: 23,
    name: "Square",
    price: "77.00",
    image:
      "http://localhost:3000/images/products/square.png"
  },
  {
    id: 24,
    name: "Wednesday",
    price: "34.00",
    image:
      "http://localhost:3000/images/products/wednesday.png"
  },
  {
    id: 25,
    name: "Wooden",
    price: "34.00",
    image:
      "http://localhost:3000/images/products/wooden.png"
  },
  {
    id: 26,
    name: "Woodgrain",
    price: "34.00",
    image:
      "http://localhost:3000/images/products/woodgrain.png"
  }
];

const itemsPerPage = 8;

// Split the products array up into chunks, representing pages of products
const allProducts = products.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index/itemsPerPage)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, []);

export const loadPage = (pageNo) => {
  return allProducts[pageNo - 1]; // Array is 0-indexed
};

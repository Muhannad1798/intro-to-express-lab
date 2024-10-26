// Import Express
const express = require('express')

// Create an Express app
const app = express()

const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
]
const shoes = [
  { name: 'Birkenstocks', price: 50, type: 'sandal' },
  { name: 'Air Jordans', price: 500, type: 'sneaker' },
  { name: 'Air Mahomeses', price: 501, type: 'sneaker' },
  { name: 'Utility Boots', price: 20, type: 'boot' },
  { name: 'Velcro Sandals', price: 15, type: 'sandal' },
  { name: 'Jet Boots', price: 1000, type: 'boot' },
  { name: 'Fifty-Inch Heels', price: 175, type: 'heel' }
]

//Define routes/ APIs
app.get('/greetings/:name', (req, res) => {
  res.send(`Hello there, ${req.params.name}!`)
})

app.get('/roll/:number', (req, res) => {
  let n = Number(req.params.number)
  let num = Math.floor(Math.random() * req.params.number)
  if (Number.isInteger(n)) {
    res.send(`You rolled a ${num}!`)
  } else res.send(`You must specify a number`)
})

app.get('/collectibles/:col', (req, res) => {
  let n = Number(req.params.col)
  if (n < collectibles.length) {
    res.send(
      `So, you want the ${collectibles[n].name}? For ${collectibles[n].price}, it can be yours!`
    )
  } else {
    res.send(`This item is not yet in stock. Check back soon!`)
  }
})

app.get('/shoes/minPrice/:price', (req, res) => {
  let n = Number(req.params.price)
  const arr = []
  shoes.forEach((shoe, i) => {
    if (shoe.price < n) {
    } else {
      arr.push(shoe)
    }
  })
  res.send(arr)
})

app.get('/shoes/maxPrice/:price', (req, res) => {
  let n = Number(req.params.price)
  const arr = []
  shoes.forEach((shoe, i) => {
    if (shoe.price > n) {
    } else {
      arr.push(shoe)
    }
  })
  res.send(arr)
})

app.get('/shoes/type/:typ', (req, res) => {
  let t = req.params.typ
  const arr = []
  shoes.forEach((shoe, i) => {
    if (shoe.type != t) {
    } else {
      arr.push(shoe)
    }
  })
  res.send(arr)
})

app.get('/shoes', (req, res) => {
  const arr = []
  shoes.forEach((shoe, i) => {
    arr.push(shoe)
  })
  res.send(arr)
})

//listen for our request on port 3000

app.listen(3000, () => {
  console.log('listen on port 3000')
})

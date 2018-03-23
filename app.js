const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const app = express()
app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/:planet', (req, res, next) => {
  res.json({message: `Hello from ${req.params.planet}!`})
})
//no route was found
app.use((req, res, next) =>{
  next({status: 404, message: 'Not found'})
})
//any error
app.use((err, req, res, next) => {
  const status = err.status || 500
  res. status(status).json({error: err})
})

app.listen(port, () => {
  console.log('Listening on port', port)
})

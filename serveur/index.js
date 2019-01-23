const express = require('express')

let app = express()

// Declare our route and call the controller that will do all the job with callbacks
app.get('/getTodos', function (req, res) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')

  setTimeout(() => {
    res.json({
      todos: [
        {
          id: '1',
          title: 'Ménage',
          description: 'Ne pas oublier de faire le ménage...'
        },
        {
          id: '2',
          title: 'Feuille de temps',
          description: 'La feuille de temps c\'est super important ! '
        }
      ]
    })
  }, 1500)
})

app.listen(3001)

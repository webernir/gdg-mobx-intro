const express = require('express'),
  app = express(),
  port = process.env.PORT || 3001

const googleFinance = require('google-finance')

const getHistoricData = symbol => {
  return googleFinance.historical({
    symbol,
    from: '2014-01-01',
    to: '2014-12-31'
  })
}

const getNews = symbol => {
  return googleFinance.companyNews({
    symbol
  })
}

app.get('/api/:symbol/history', async (req, res) => {
  const data = await getHistoricData(req.params.symbol)
  res.json({ data })
})

app.get('/api/:symbol/news', async (req, res) => {
  const data = await getNews(req.params.symbol)
  res.json({ data })
})


app.listen(port)

console.log('todo list RESTful API server started on: ' + port)

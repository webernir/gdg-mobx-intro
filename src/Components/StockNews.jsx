import React from 'react'
import { observer } from 'mobx-react'

const NewsItem = ({ item }) => (
  <article className="message is-primary">
    <div className="message-header">
      <p>{item.title}</p>
      <button className="delete" />
    </div>
    <div className="message-body">
      <small>
        {item.summary.substring(0, 100)} ...
      </small>
    </div>
  </article>
)

const StockNews = ({ stock }) => {
  return stock.news.length === 0
    ? null
    : <div style={{ height: '450px', overflowY: 'auto' }}>
        {stock.news.map((newsItem, index) => (
          <NewsItem key={index} item={newsItem} />
        ))}
      </div>
}

export default observer(StockNews)

import { observable, computed, action, runInAction } from 'mobx'
import remotedev from 'mobx-remotedev/lib/dev'
import uuid from 'uuid/v4'
import symbols from './symbols'

@remotedev({
  filters: {
    blacklist: ['add']
  }
})
export class StocksStore {
  @observable stocks = []
  @observable selectedId = undefined

  constructor() {
    symbols.forEach(this.append.bind(this))
  }

  @computed get selected() {
    return this.stocks.find(t => t.id === this.selectedId)
  }

  @action selectStock(id) {
    this.selectedId = id
    this.updateHistory(this.getSymbol(id))
    this.updateNews(this.getSymbol(id))
  }

  @action append(symbol) {
    if (!this.stocks.map(t => t.symbol).includes(symbol)) {
      this.stocks.push({ id: uuid(), symbol, history: [], news: [] })
    }  
  }

  @action remove(id) {
    const item = this.stocks.find(t => t.id === id)
    this.stocks.remove(item)
  }

  getSymbol = id => this.stocks.find(t => t.id === id).symbol

  updateHistory = async symbol => {
    const response = await fetch(`/api/${symbol}/history`)
    const data = await response.json()

    runInAction(() => {
      this.selected.history.replace(data.data)
    })
  }

  updateNews = async symbol => {
    const response = await fetch(`/api/${symbol}/news`)
    const data = await response.json()

    runInAction(() => {
      this.selected.news.replace(data.data)
    })
  }
}

const store = new StocksStore()
export default store

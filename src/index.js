import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import BookBook from './views/book-book'
import BookpageBook from './views/bookpage-book'
import BookBook1 from './views/book-book1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={BookBook} exact path="/book-book" />
        <Route component={BookpageBook} exact path="/bookpage-book" />
        <Route component={BookBook1} exact path="/book" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

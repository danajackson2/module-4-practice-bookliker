import React from "react";
import {Menu,} from "semantic-ui-react";
import BookList from './BookList'
import Book from './Book'

class App extends React.Component {
  state={
    books: [],
    selectedBook: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(data => this.setState({books:data}))
  }
  
  showBook = (id) => {
    fetch(`http://localhost:3000/books/${id}`)
    .then(res => res.json())
    .then(data => this.setState({selectedBook:data}))
  }

  addLike = (book) => {
    let newList
    if (book.users.map(u => u.username).includes('pouros')){
      newList = book.users.filter(u => u.username !== "pouros")
    } else {
      newList = book.users.concat({"id":1, "username":"pouros"})
    }
    fetch(`http://localhost:3000/books/${book.id}`,{
      method: 'PATCH',
      headers:{'content-type':'application/json'},
      body:JSON.stringify({
        users: newList
      })
    })
    .then(res => res.json())
    .then(book => this.setState({selectedBook: book}))
  }

  render(){
    return (
      <div>
        <Menu inverted>
          <Menu.Item header>Bookliker</Menu.Item>
        </Menu>
        <main>
          <BookList books={this.state.books} showBook={this.showBook}/>
          <Book book={this.state.selectedBook} addLike={this.addLike}/>
        </main>
      </div>
    )
  }
}

export default App;

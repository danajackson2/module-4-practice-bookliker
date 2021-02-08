import React from 'react'
import {Menu} from "semantic-ui-react"

function BookList(props){
    return(
        <Menu vertical inverted>
            {props.books.map(b => <Menu.Item onClick={() => props.showBook(b.id)}>{b.title}</Menu.Item>)}
        </Menu>
    )
}

export default BookList
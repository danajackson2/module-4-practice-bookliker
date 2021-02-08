import React from 'react'
import {Container, Header, Image, Button, List} from "semantic-ui-react"

function Book(props){
    if (props.book.title !== undefined){
        return (
            <Container text>
                <Header>{props.book.title}</Header>
                <Image src={props.book.img_url} size="small" />
                <p>{props.book.description}</p>
                <Button
                    onClick={() => props.addLike(props.book)}
                    color="red"
                    content="Like"
                    icon="heart"
                    label={{
                    basic: true,
                    color: "red",
                    pointing: "left",
                    content: `${props.book.users.length}`
                    }}
                />
                <Header>Liked by</Header>
                <List>
                    {props.book.users.map(u => <List.Item icon="user" content="User name" >{u.username}</List.Item>)}
                </List>
            </Container>
        )
    } else {
        return(<Container text><Header> ⬅️ Pick a book!</Header></Container>)
    }
}

export default Book
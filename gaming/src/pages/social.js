import React from 'react'
import Navbar from '../components/navbar'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Xbox from '../assets/images/xbox.png'
import PS4 from '../assets/images/ps4.png'
import Nerd from '../assets/images/nerd.jpg'

class Social extends React.Component{
    render(){
        return(
            <div id='social'>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Nerd} />
  <Card.Body>
    <Card.Title>Let's Play</Card.Title>
    <Card.Text>
     If you're looking for ways to follow my gaming, support my stream or just play with me: Check this out!
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem><img id='gamerlogo' src={Xbox}/>XBOX One Gamertag: URxFAVxAUTHOR</ListGroupItem>
    <ListGroupItem><img id='gamerlogo' src={PS4}/>PS4 Gamertag: URxFAVxAUTHOR</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="https://www.facebook.com/NM-Porterfield-Gaming-107047141250651">Facebook</Card.Link>
    <Card.Link href="www.patreon.com/urfavoriteauthor">Patreon</Card.Link>
  </Card.Body>
</Card>

            </div>
        )
    }
}

export default Social;

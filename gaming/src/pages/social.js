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
<Card bg ='dark' text='white' style={{ width: '24rem' }}>
  <Card.Img variant="top" src={Nerd} />
  <Card.Body bg ='dark' text='white'>
    <Card.Title><h2>Let's Play!</h2></Card.Title>
    <Card.Text>
     <h4>If you're looking for ways to follow my gaming, support my stream or just play with me: Check this out!</h4>
    </Card.Text>
  </Card.Body>
  <Card.Body>
  <Card.Text>
  <img id='gamerlogo' src={PS4}/>Gamertag: URxFAVxAUTHOR
    </Card.Text>
    <Card.Text>
    <img id='gamerlogo' src={Xbox}/>Gamertag: URxFAVxAUTHOR

    </Card.Text>
    <Card.Link href="https://www.facebook.com/NM-Porterfield-Gaming-107047141250651"><h3>Facebook</h3></Card.Link>
    <Card.Link href="www.patreon.com/urfavoriteauthor"><h3>Patreon</h3></Card.Link>
  </Card.Body>
</Card>

            </div>
        )
    }
}

export default Social;

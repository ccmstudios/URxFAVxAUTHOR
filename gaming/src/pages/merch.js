import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Cutter from '../assets/images/cutterhoodie.jpg'
import Midas from '../assets/images/midashoodie.jpg'
import Avalanche from '../assets/images/avalanchehoodie.jpg'
import Button from 'react-bootstrap/Button'
class Merch extends React.Component{
    render(){
        return(
            <div id='merch'>
              <h1>Merchandise</h1>
              <h4>Get AWESOME gear from URxFAVxAUTHOR</h4>
              <br></br>
              <br></br>
              <br></br>
<CardDeck >
  <Card id='merchcards' bg ='dark' text='white'>
    <Card.Img variant="top" src={Cutter} />
    <Card.Body>
      <Card.Title>Golem Genesis: Cutter Hoodie</Card.Title>
      <Card.Text>
      <h4>A custom hoodie from the Golem Genesis Comic written by N.M. Porterfield</h4>
      </Card.Text>
      <Card.Text>
 Cost: $45.00
      </Card.Text>
        <Button target='_blank' href='https://urfavoriteauthor.square.site/product/cutter-hoodie/45?cs=true&cst=custom' variant="light">Purchase Here!</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">www.NMPORTERFIELD.com</small>
    </Card.Footer>
  </Card>
  <Card id='merchcards' bg ='dark' text='white'>
    <Card.Img variant="top" src={Avalanche} />
    <Card.Body>
      <Card.Title>Golem Genesis: Avalanche Hoodie</Card.Title>
      <Card.Text>
      <h4>A custom hoodie from the Golem Genesis Comic written by N.M. Porterfield</h4>

      </Card.Text>
      <Card.Text>
 Cost: $45.00
      </Card.Text>
        <Button target='_blank' href='https://urfavoriteauthor.square.site/product/avalanche-hoodie/46?cs=true&cst=custom' variant="light">Purchase Here!</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">www.NMPORTERFIELD.com</small>
    </Card.Footer>
  </Card>
  <Card id='merchcards' bg ='dark' text='white'>
    <Card.Img variant="top" src={Midas} />
    <Card.Body>
      <Card.Title>Golem Genesis: Midas Hoodie</Card.Title>
      <Card.Text>
      <h4>A custom hoodie from the Golem Genesis Comic written by N.M. Porterfield</h4>

      </Card.Text>
      <Card.Text>
 Cost: $45.00
      </Card.Text>
        <Button target='_blank' href='https://urfavoriteauthor.square.site/product/midas-hoodie/47?cs=true&cst=custom'variant="light">Purchase Here!</Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">www.NMPORTERFIELD.com</small>
    </Card.Footer>
  </Card>
</CardDeck>
</div>
        )
    }
}

export default Merch;
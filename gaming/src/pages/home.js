import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import ReactPlayer from "react-player"
import Card from 'react-bootstrap/Card'
import Nerd from '../assets/images/nerd.jpg'
import Comics from '../assets/images/comics.jpg'
class Home extends React.Component{
    render(){
        return(
            <div id='home'>
<header>
<Jumbotron id='jumbotron' fluid>
  <Container>
    <h1>URxFAVxAUTHOR Gaming</h1>
    <h3>
Sometimes you have to let the story play out...
    </h3>
  </Container>
</Jumbotron>
    </header>
    <div>
    <>
  <Card bg ='dark' text='white'className='homecards'>
    <Card.Img variant="top" src={Nerd} />
    <Card.Body>
      <Card.Text>
 <h4>It's #urfavoriteauthor N.M. Porterfield! When I'm not working on my next book, comic book, or screenplay, I like to unwind by doing some gaming.</h4>
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card bg ='dark' text='white'className='homecards'>
    <Card.Body>
      <Card.Text>
<h4>Gaming has always been a part of my life. It's actually one of my favorite forms of story telling. Amazing writing, gameplay and graphics can make for hours of fun. So tune in and watch URxFAVxAUTHOR game hard</h4>
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src={Comics} />
  </Card>
</>
    </div>

            </div>
        )
    }
}

export default Home;
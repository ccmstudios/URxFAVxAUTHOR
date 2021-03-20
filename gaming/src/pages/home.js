import React from 'react'
import Navbar from '../components/navbar'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import ReactPlayer from "react-player"

class Home extends React.Component{
    render(){
        return(
            <div id='home'>
<header>
<Jumbotron id='jumbotron' fluid>
  <Container>
    <h1>URxFAVxAUTHOR Gaming</h1>
    <p>
Sometimes you have to let the story play out...
    </p>
  </Container>
</Jumbotron>
    </header>
<section>
    <div>
        <h1>
Lets Play
        </h1>
    </div>
</section>

            </div>
        )
    }
}

export default Home;
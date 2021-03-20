import React from 'react'
import Navbar from '../components/navbar'
import ReactPlayer from "react-player"
import Highlights from '../components/highlights'

class Games extends React.Component{
    render(){
        return(
            <div id='games'>
                <h1>Watch Me Live</h1>
                <h3>Fridays,Saturdays, and Sundays at 10pm EST</h3>
                <ReactPlayer
        url="https://www.twitch.tv/urfavoriteauthor"
        controls
      />
                <div>
<h1>Carousel of highlights goes here</h1>
<Highlights/>
                </div>
            </div>
        )
    }
}

export default Games;
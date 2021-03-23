import React from 'react'
import Navbar from '../components/navbar'
import ReactPlayer from "react-player"
import Highlights from '../components/highlights'

class Games extends React.Component{
    render(){
        return(
            <div id='games'>
                <h1>Watch Me Live</h1>
                <br></br>
                <br></br>
                <h3>Fridays,Saturdays, and Sundays at 10pm EST</h3>
                <br></br>
                <h3>Twitch Livestream</h3>
                <ReactPlayer
        url="https://www.twitch.tv/urfavoriteauthor"
        controls
      />
                <div>
<h1>Gaming Highlights</h1>
<Highlights/>
                </div>
            </div>
        )
    }
}

export default Games;
import Carousel from 'react-bootstrap/Carousel'
import ReactPlayer from "react-player"
import {useState} from 'react'

    function  Highlights() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (
          <Carousel id='highlights' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
            <ReactPlayer
        url="https://youtu.be/VY9-v3Oi7LU"
        controls
  
      />
              <Carousel.Caption>
                <h3>The Diamond Warrior Golem</h3>
                <p>Cutter</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://youtu.be/yBOrDLPhIVQ"
        controls
      />
              <Carousel.Caption>
                <h3>The Brimstone Golem</h3>
                <p>Pompeii</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://youtu.be/70H6ENacYjk"
        controls
      />
              <Carousel.Caption>
                <h3>The Island Golem</h3>
                <p>Pacifica</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://youtu.be/cuKOZKvVXzI"
        controls
      />
              <Carousel.Caption>
                <h3>The Desert shadow golem</h3>
                <p>Sahara</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://youtu.be/TXGJNjAevMY"
        controls
      />
              <Carousel.Caption>
                <h3>The Star Destroyer Golem</h3>
                <p>Binary</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://youtu.be/euADZS4xHV4"
        controls
      />
              <Carousel.Caption>
                <h3>The Planet Breaker Golem</h3>
                <p>Asteros</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://youtu.be/x3ebm26C49Y"
        controls
      />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Lunar</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://youtu.be/e0YrvVgkomk"
        controls
      />
              <Carousel.Caption>
                <h3>The Blizzard Golem</h3>
                <p>Avalanche</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://youtu.be/YDJ7Srb3xnE"
        controls
      />
            </Carousel.Item>
          </Carousel>
        );
      }
      
    //   render(<Slideshow />);

export default Highlights;
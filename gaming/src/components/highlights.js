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
        url="https://www.youtube.com/watch?v=2lu87_wdvy0"
        controls
  
      />
              <Carousel.Caption>
                <h3>URxFAVxAUTHOR Takedown MidBoss
</h3>
                <p>Borderlands 3</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://www.youtube.com/watch?v=6VU-fGVgLRo"
        controls
      />
              <Carousel.Caption>
                <h3>TVH mayhem 10 Rampager Battle URxFAVxAUTHOR
</h3>
                <p>Borderlands 3</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://www.youtube.com/watch?v=ui5pk_GD5sg"
        controls
      />
              <Carousel.Caption>
                <h3>Tekken Montage</h3>
                <p>Tekken 7</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://www.youtube.com/watch?v=2i_cb0LGg78"
        controls
      />
              <Carousel.Caption>
                <h3>Getting My Mortal Kombat Legs back</h3>
                <p>Mortal Kombat 11</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://www.youtube.com/watch?v=-kxvJkT9KsU"
        controls
      />
              <Carousel.Caption>
                <h3>Horde Survival URxFAVxAUTHOR</h3>
                <p>Days Gone</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://www.youtube.com/watch?v=R3gFehGK8iI"
        controls
      />
              <Carousel.Caption>
                <h3>Online Amateur MK tourney</h3>
                <p>Mortal Kombat XL</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://www.youtube.com/watch?v=t1Ren4k_Kkw"
        controls
      />
              <Carousel.Caption>
                <h3>Apex Legends Run</h3>
                <p>Apex Legends</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer
        url="https://www.youtube.com/watch?v=yBOrDLPhIVQ&t=8s"
        controls
      />
              <Carousel.Caption>
                <h3>Apex Legends Wins</h3>
                <p>Apex Legends</p>
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
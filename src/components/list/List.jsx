import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
import ListItem from '../listItem/ListItem';
import './List.scss'
import { useRef, useState } from 'react';

export default function List() {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(0);

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right" && slideNumber < 5) {
      setSlideNumber(slideNumber + 1)
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className='list'>
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined 
          className="sliderArrow left" 
          onClick={() => handleClick("left")} 
          style={{display: (slideNumber === 0) && "none"}}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined 
          className="sliderArrow right" 
          onClick={() => handleClick("right")} 
          style={{display: (slideNumber === 5) && "none"}}
        />
      </div>
    </div>
  );
}
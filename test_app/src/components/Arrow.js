import React, {useState} from 'react';
import arrowLeft from '../img/arrowLeft.svg';
import arrowRight from '../img/arrowRight.svg';

const Arrow = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.apidata.length;
    const nextSlide = () => {
        setCurrent(current===length - 1 ? 0 : current + 1)
    }
    
    const prevSlide = () => {
        setCurrent(current===0 ? length-1 : current - 1)
    }
    const SendData = () => {
        props.sliderCallback(current)
    }
    if(props.direction==='right')
    {return <div className='right-arrow' onClick={()=>{nextSlide(); SendData()}}>
        <img src={arrowRight} alt='arrow-right' />
    </div>}
     return <div className='left-arrow' onClick={()=>{prevSlide(); SendData()}}>
         <img src={arrowLeft} alt='arrow-left' />
     </div>
}

export default Arrow;
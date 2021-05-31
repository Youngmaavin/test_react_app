import React, {useState, useCallback} from 'react';
import Arrow from './Arrow';
import './Slider.css';

const Slider = (props) => {
    const [ArrowData, setArrowData] = useState(0);
    const setSlide = (current) => {
        setArrowData(current);
    }
    if(!Array.isArray(props.apidata) || props.apidata.length <= 0) {
        return null;
    }
        return(
            <section className='slider'>
                <Arrow
                sliderCallback={setSlide}
                length={props.apidata.length}
                direction='right' />
                <Arrow
                sliderCallback={setSlide}
                length={props.apidata.length}
                direction='left' />
                {props.apidata.map((data, index) => {
                    return(<div className={index===ArrowData ? 'slide-active' : 'slide'}
                    key = {data.pk}>
                        {index===ArrowData && (<img src={data.image} alt={data.title} />)}
                    </div>)
                })}
            </section>
        );
    }

export default Slider;
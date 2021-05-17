import React, {useState, useEffect} from 'react';
import Arrow from './Arrow';

const Slider = (props) => {
    const [ArrowData, setArrowData] = useState(0);
    const CallbackFunc = (arrowIndex) => {
       setArrowData(arrowIndex) 
    }
    console.log(ArrowData)
    useEffect(()=>{
        
    })
    if(!Array.isArray(props.apidata) || props.apidata.length <= 0) {
        return null;
    }
        return(
            <section className='slider'>
                <Arrow
                sliderCallback={CallbackFunc}
                apidata={props.apidata}
                direction='right' />
                <Arrow
                sliderCallback={CallbackFunc}
                apidata={props.apidata}
                direction='left' />
                {props.apidata.map((data, index) => {
                    return(<div className={index===ArrowData ? 'slide-active' : 'slide'}
                    key = {data.pk}>
                        {index===ArrowData && (<img src={data.image} />)}
                    </div>)
                })}
            </section>
        );
    }

export default Slider;
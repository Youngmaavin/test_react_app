import React from 'react';
import Slider from './Slider';

const Content = (props) => {
    return (
        <div>
            <Slider apidata={props.apidata} />
        </div>
    )
}

export default Content;

import React, {useCallback} from 'react';
import arrowLeft from '../img/arrowLeft.svg';
import arrowRight from '../img/arrowRight.svg';

const Arrow = ({sliderCallback, length, direction}) => {
    const onArrowClick = () => {
        sliderCallback((current) => {
            if (direction === 'right') {
                return current === (length - 1) ? 0 : current + 1;
            }
            else {
                return current === 0 ? length - 1 : current - 1;
            }
        })
    }
    if(direction==='right')
    {return <div className='right-arrow' onClick={onArrowClick}>
        <img src={arrowRight} alt='arrow-right' />
    </div>}
     return <div className='left-arrow' onClick={onArrowClick}>
         <img src={arrowLeft} alt='arrow-left' />
     </div>
}

export default Arrow;
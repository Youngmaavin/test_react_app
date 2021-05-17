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
            key = {index}>
                {index===ArrowData && (<img src={data.image} />)}
            </div>)
        })}
    </section>
);


if(!Array.isArray(props.apidata) || props.apidata.length <= 0) {
    return null;
}
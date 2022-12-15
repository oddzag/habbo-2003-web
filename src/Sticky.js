import React, { useState }  from 'react';
import DraggableCore from 'react-draggable';

function Sticky(props) {

    const [bg, setBG] = useState('sticky_bg_b');
    const [show, close] = useState(false);
    return (
        //Draggable's documentation does not allow for variable values of x/y bounds
        //(or I just haven't figured it out yet)
        //will need that functionality to account for big/small monitors
        //x/y values are in px
        <DraggableCore defaultPosition={{x: 800, y: 200}}>
            {/*this is a hack to hide the sticky, will need to make a way to re-show it */}
            <div className={"sticky " + bg} hidden={show}>
                <div className="sticky_head">
                    <div className="sticky_bin" onClick={close}></div>
                    <div className="sticky_b" onClick={() => setBG('sticky_bg_b')}></div>
                    <div className="sticky_p" onClick={() => setBG('sticky_bg_p')}></div>
                    <div className="sticky_g" onClick={() => setBG('sticky_bg_g')}></div>
                    <div className="sticky_y" onClick={() => setBG('sticky_bg_y')}></div>
                    <div className="sticky_exit" onClick={close}></div>
                </div>
                <p>
                    {props.message}
                </p>
            </div>
        </DraggableCore>
    )
}

export default Sticky;

//feel free to refactor, it's bloated for readability. 
//I'll refactor it at some point but idc for now
    
//TO DO
//clean up onClick functions
//add scalable function. there's gotta be a <Expand> package out there or sum
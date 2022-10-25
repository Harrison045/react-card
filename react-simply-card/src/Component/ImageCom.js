import React, {Component} from 'react';
import img from './images/shoe.jpeg';

let ImageCom=(props)=>{
    return(
        <>
        <img className='pic' src={img}/>
        </>
    )
}

export default ImageCom;
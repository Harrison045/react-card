import React, {Component} from 'react';
import Description from './Description';
import ImageCom from './ImageCom';
import Title from './title';


class SimpleCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <Title name="A Title"/>
            <Description descrip="My description goes here"/>
            <ImageCom pic="IMG"/>
            </>
            
        )
    }
}

export default SimpleCard;

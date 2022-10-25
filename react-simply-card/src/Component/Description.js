import React, {Component} from 'react';

class Description extends Component{
    render(){
        return(
            <>
                <p className='descrip'>{this.props.descrip}</p>
            </>
        )
    }
}
export default Description;
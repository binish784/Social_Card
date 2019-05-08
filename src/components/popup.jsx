import React, { Component } from 'react';

class PopUp extends Component{

    render(){
        let toggle= this.props.isOpen ? 'PopUp-shown' : 'PopUp-hidden'
        return(
            <div className={toggle}>
                <div className='PopUp-content'>
                {this.props.children}
                </div>
            </div>
        );
    }

}

export default PopUp;
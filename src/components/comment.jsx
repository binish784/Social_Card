import React, { Component } from 'react';

class Comment extends Component{
render(){
    return(
        <div className='commentRow'>
            {this.props.commentText}
        </div>
    )
    }
}

export default Comment;
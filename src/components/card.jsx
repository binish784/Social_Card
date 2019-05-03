import React, { Component } from 'react';

class SocialCard extends Component { 

    state={
        'like':50,
        'comment':15,
        'share':5,
        'liked':false,
        'shared':false,
        'commented':false,
    }

    handleLike=(e)=>{
        let like=this.state.like;
        let liked=this.state.liked;
        if(liked){
            like=like-1;
            liked=false;
        }else{
            like=like+1;
            liked=true;
        }
        this.setState({like,liked});
    }

    handleComment=(e)=>{
        let comment=this.state.comment;
        comment=comment+1;
        this.setState({comment});
    }
    
    handleShare=(e)=>{
        let share=this.state.share;
        share=share+1;
        this.setState({share});
    }

    showLike(){
        if(this.state.liked){
            return(<div className='col-sm-4 alignCenter padding5 '><a href="#" className='textLoved' onClick={this.handleLike}>{this.state.comment} Loved</a></div>);
        }else{
            return(<div className='col-sm-4 alignCenter padding5'><a href="#" onClick={this.handleLike}>{this.state.comment} Love </a></div>);
        }
    }

    render(){
       return (
           <div className='row'>
          
                <div className='col-md-6 offset-md-3'>
                <hr></hr>
                    <div className='row'>
                        <div className='col-sm-2 nopadding'>
                           <img src='https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png' className='imageIcon'></img>
                        </div>
                            <div className='col-sm-8 nopadding'>
                            <b>The Practical Dev</b> <a href="#" className='greyText'>@ThePracticalDev</a> <br></br>
                            Learning React ? Start small.<br></br>
                            {'{ author :  '} <a href="#profile">@binish784</a> { '}'}
                            <br></br>
                            
                            <a href='#' className='colorBlack'><div className='card'>
                                <img src='https://images.alphacoders.com/511/thumb-1920-511052.jpg' className='postImage card-img-top img-fluid'></img>
                                <div className='card-body'>
                               
                                    <b className='card-title'>
                                    Learning React ? Start small.
                                    </b>
                                    <p className='smallText'>
                                        Learn by doing, you dont have to be great to start but start to be great.
                                    </p>
                                </div>
                            </div></a>

                            <div className='row'>
                                {this.showLike()}
                                <div className='col-sm-4 alignCenter padding5'><a href="#" onClick={this.handleComment}>{this.state.comment} Comment</a></div>
                                <div className='col-sm-4 alignCenter padding5'><a href='#' onClick={this.handleShare}>{this.state.share} Share</a></div>
                            </div>
                            
                            </div>
                    </div>
                    
                <hr></hr>
                </div>
            </div>
       );
   }
}

export default SocialCard;
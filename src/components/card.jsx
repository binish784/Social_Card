import React, { Component } from 'react';
import {FaHeart,FaShare,FaRegComments} from 'react-icons/fa';
import PopUp from './popup';

class SocialCard extends Component { 

    state={
        'show':false,
        'comments':[
            'Default Comment',
            'Second Comment'
        ],
        'visible':false,
        'like':50,
        'comment':0,
        'share':5,
        'liked':false,
        'shared':false,
        'comment_text':'',
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

    
    handleShare=(e)=>{
        if(!this.state.shared){
            let share=this.state.share;
            let shared=this.state.shared;
            share=share+1;
            shared=true;
            this.setState({share,shared});
        }
    }

    handleChange=(e)=>{
        let comment_text=e.target.value;
        this.setState({comment_text});
    }

    addComment=()=>{
        let comments=this.state.comments;
        let comment_text=this.state.comment_text;
        comments.push(comment_text);
        console.log(comment_text);
        comment_text="";
        this.setState({comment_text}); 
    }

    handleKeyPress=(e)=>{
        if(e.key==="Enter"){
            let comments=this.state.comments;
            let comment_text=this.state.comment_text;
            if(comment_text==''){
                return false;
            }else{
                comments.push(comment_text);
                comment_text="";
                this.setState({comment_text}); 
            }
        }
    }

    showShare(){
        if(this.state.shared){
            return <div className='col-sm-4 alignCenter padding5'><a href='javascript:void(0)' className='textShared nodecoration'><span style={{color:'deepskyblue'}}><FaShare size={20} />&nbsp;&nbsp; {this.state.share} </span></a></div>              
        }else{
            return <div className='col-sm-4 alignCenter padding5'><a href='javascript:void(0)' className='nodecoration' onClick={this.handleShare}><FaShare size={20} />&nbsp;&nbsp; {this.state.share} </a></div>             
        }
    }


    showLike(){
        if(this.state.liked){
            return(<div className='col-sm-4 alignCenter padding5 '><a href="javascript:void(0)" className='textLoved nodecoration' onClick={this.handleLike}><span style={{color:'red'}}><FaHeart size={20}/>&nbsp;{this.state.like}  </span></a></div>);
        }else{
            return(<div className='col-sm-4 alignCenter padding5'><a href="javascript:void(0)" className=' nodecoration' onClick={this.handleLike}><span ><FaHeart size={20}/>&nbsp;  {this.state.like}</span></a></div>);
        }
    }

    closePopUp=()=>{
        let visible=this.state.visible;
        visible=false; 
        console.log("state changed to " + visible);
        this.setState({visible});
    }

    showPopUp=()=>{
        let visible=this.state.visible;
        visible=true; 
        console.log("state changed to " + visible);
        this.setState({visible});
    }

    render(){
       return (
           <div className='container'>
           <div className='row'>
          
                <div className='col-md-8 offset-md-2'>
                <hr></hr>
                    <div className='row'>
                        <div className='col-sm-2 nopadding'>
                           <img src='https://img.icons8.com/color/1600/circled-user-male-skin-type-1-2.png' className='imageIcon'></img>
                        </div>
                            <div className='col-sm-8 nopadding'>
                            <b>{this.props.title}</b> <a href="javascript:void(0)" className='greyText'>@ThePracticalDev</a> <br></br>
                            {this.props.subTitle}<br></br>
                            {'{ author :  '} <a href="javascript:void(0)" className='nodecoration'>@{this.props.author}</a> { '}'}
                            <br></br>
                            
                            <a href='javascript:void(0)' className='colorBlack'><div className='card'>
                                <img src='https://images.alphacoders.com/511/thumb-1920-511052.jpg' className='postImage card-img-top img-fluid'></img>
                                <div className='card-body'>
                               
                                    <b className='card-title'>
                                    {this.props.subTitle}
                                    </b>
                                    <p className='smallText'>
                                        {this.props.description}
                                    </p>
                                </div>
                            </div></a>

                            <div className='row'>
                                {this.showLike()}
                                <div className='col-sm-4 alignCenter padding5'>
                                    <a href="javascript:void(0)" className='nodecoration' onClick={this.showPopUp}>
                                        {this.state.comments.length}&nbsp;&nbsp; <FaRegComments size={20}/>
                                    </a>
                                </div>
                                {this.showShare()}
                            </div>
                            </div>
                    </div>
                    
                <hr></hr>
                </div>
               
            </div>
            <PopUp isOpen={this.state.visible}>
                <br></br>
                <p className='commentHeader'>Comments:</p>
                
                <div className='row'>
                    <div className='col-md-10'>
                        <input type='text' className='form-control' placeholder='Comment Here...' onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.comment_text}></input>
                    </div>
                    <div className='col-md-2'>
                        <input type='submit' className='btn btn-primary' value='Comment' onClick={this.addComment}></input>
                
                    </div>
                    </div>
                <br></br>
                {this.state.comments.map((val,key)=>
                    <div className='commentRow' key={key}>{val}</div>
                    )}
                
                <a href='javascript:void(0)' id='popup-close-btn' onClick={this.closePopUp}>X</a>
            </PopUp>
            </div>
       );
   }
}

export default SocialCard;

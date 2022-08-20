import React, { Component } from 'react';
import '../chat.css';
import {connect} from 'react-redux'
import io from 'socket.io-client'
class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [], // {content: 'some message', self: true}
      typedMessage: '',
    };
  

this.socket=io.connect('http://${window.location.hostname}:5000');
//this.socket=io.connect('http://35.154.204.238:5000')

  this.userEmail=props.user.email;
  console.log('PROPSSS',props);

  if(this.userEmail){
    this.setupConnection();
  }
}

setupConnection=()=>{

    const socketConnection = this.socket;
    const self= this;
    this.socket.on('connect',function(){
        console.log('CONNECTIION ESTABLISHED');

        socketConnection.emit('join_room',{
            user_email:this.userEmail,
            chatroom:'codeial'
        });
        socketConnection.on('user_joined',function(data){
            console.log('NEW USER JOINED',data);
        });
    });


    this.socket.on('receive_message',function(data){
        //add message to state
        const {messages}=self.state;
        const messageObject={};
        messageObject.content=data.message;
        if(data.user.email===self.userEmail){
            messageObject.self=true;
        }
        self.setState({
            messages:[...messages,messageObject],
            typedMessage:''
        })
    })
}

handleSubmit=()=>{
    const {typedMessage}=this.state;
    if(typedMessage && this.userEmail){
        this.socket.emit('send_message',{
            message:typedMessage,
            user_email:this.userEmail,
            chatroom:'codeial',
        });
    }
};

  render() {
    const { typedMessage, messages } = this.state;

    return (
      <div className="chat-container">
        <div className="chat-header">
          Chat
          <img
            src="https://www.iconsdb.com/icons/preview/white/minus-5-xxl.png"
            alt=""
            height={17}
          />
        </div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              className={
                messages.self
                  ? 'chat-bubble self-chat'
                  : 'chat-bubble other-chat'
              }
            >
              {message.content}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={typedMessage}
            onChange={(e) => this.setState({ typedMessage: e.target.value })}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({auth}){
    return{
        user:auth.user
    }
} 
export default connect(mapStateToProps)(Chat);
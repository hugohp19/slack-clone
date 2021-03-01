import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db  from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';
import { AppContext } from '../context/AppContext';

function Chat({user}) {
  let { channelId } = useParams();
  const [channel, setChannel] = useState();
  const [messages, setMessages] = useState([]);
  const {backColor} = useContext(AppContext);

  const getMessages = () => {
    db.collection('rooms')
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot)=>{
      setMessages(snapshot.docs.map((doc)=>doc.data()));
    })
  }

  const sendMessage = (text) => {
    if(channelId){
      let payload = {
        text: text,
        user: user.name,
        userImage: user.photo,
        timestamp: firebase.firestore.Timestamp.now(),
      }
      db.collection('rooms')
      .doc(channelId)
      .collection('messages')
      .add(payload)
    }
  }

  const getChannel = () =>{
    db.collection('rooms')
    .doc(channelId)
    .onSnapshot((snapshot)=>{
      setChannel(snapshot.data());
    })
  }

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId])
 

  return (
    <Container style={{backgroundColor: `${backColor.chat}`}}>
      <Header>
        <Channel>
          <ChannelName>
            # {channel && channel.name}
          </ChannelName>
          <ChannelInfo>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        
        <ChannelDetail>
          <div>
            Details
          </div>
          <InfoOutlinedIconContainer />
        </ChannelDetail>
      </Header>
      <MessageContainer>
        {
          messages.length > 0 && 
          messages.map((data, index)=>(
            <ChatMessage key={index}
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
              />
          ))
        }
      </MessageContainer>
      
      <ChatInput sendMessage={sendMessage}/>
    </Container>
  )
}

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`

const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, .13);
  justify-content: space-between;
`

const Channel = styled.div`
  
`

const ChannelName = styled.div`
  font-weight: 700;
`

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`

const ChannelDetail = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`

const InfoOutlinedIconContainer = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin: 10px 0;
`

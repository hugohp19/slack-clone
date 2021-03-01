import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../context/AppContext';

function ChatMessage({text, name, image, timestamp}) {
  const {backColor} = useContext(AppContext);

  return (
    <Container style={{color: `${backColor.chatText}`}}>
      <UserAvatar>
        <img src={image} alt='User Avatar'/>
      </UserAvatar>
      <MessageContent>
        <Name style={{color: `${backColor.chatInfo}`}}>
          {name}
          <span style={{color: `${backColor.chatSpan}`}}>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name >
        <Text>
          {text}
        </Text>
      </MessageContent>
    </Container>
  )
}

export default ChatMessage;

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;

  :hover{
    background: #e3dee3;
  }
`

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right: 8px;

  img{
    width: 100%;
  }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-weight: 900;
  line-height: 1.4;
  font-size: 15px;
  
  span{
    font-weight: 400;
    font-size: 12px;
    margin-left: 8px;
  }
`

const Text = styled.span`

`
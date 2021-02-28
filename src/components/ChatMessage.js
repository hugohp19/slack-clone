import React from 'react';
import styled from 'styled-components';

function ChatMessage({text, name, image, timestamp}) {
  
  return (
    <Container>
      <UserAvatar>
        <img src={image}/>
      </UserAvatar>
      <MessageContent>
        <Name>
          {name}
          <span>{new Date(timestamp.toDate()).toUTCString()}</span>
        </Name>
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
    background: #CDAAFC;
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
  color: #3f0e40;
  
  span{
    font-weight: 400;
    color: rgb(97,96,97);
    font-size: 12px;
    margin-left: 8px;
  }
`

const Text = styled.span`

`
import React from 'react';
import styled from 'styled-components';

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src='https://randomuser.me/api/portraits/women/90.jpg'/>
      </UserAvatar>
      <MessageContent>
        <Name>
          Hugo Perez 
          <span>2/23/2021 2:12:33 PM</span>
        </Name>
        <Text>
          Styled Components are great
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
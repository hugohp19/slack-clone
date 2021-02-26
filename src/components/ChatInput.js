import React from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type='text' placeholder='Enter message here...' />
          <SendButton>
            <SendIconContainer />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  )
}

export default ChatInput;

const Container = styled.div`
  padding: 0 20px 20px 20px;
`

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form{
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;

    input{
      flex: 1;
      border: none;
      outline: none;
      font-size: 13px;
    }
  }
`
const SendButton = styled.div`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;

  .MuiSvgIcon-root{
    width: 18px;
  }

  :hover{
    background: #148567;
  }
`

const SendIconContainer = styled(SendIcon)`
  color: #d9d9d9;
`
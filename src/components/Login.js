import React from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login({setUser}) {

  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((response)=>{ 
      const newUser = {
        name: response.user.displayName,
        photo: response.user.photoURL,
      }
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser))
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <Container>
      <Content>
        <SlackImg src='http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png'/>
        <h1>Sing In Slack</h1>
        <SignInButton onClick={signIn}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  )
}

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px -9px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SlackImg = styled.img`
  margin-bottom: 10px;
  height: 100px;
`

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: white;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`
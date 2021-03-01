import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { AppContext } from '../context/AppContext';

function Header({ user, signOut }) {
  const {backColor, setBackColor} = useContext(AppContext);

  const changeTheme = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    switch (e.target.value) {
      case 'normal':
        setBackColor({
          header: '#350d36',
          sidebar: '#3f0e40',
          chat: 'white',
          chatText: 'black',
          chatSpan: '#3f0e40',
          chatInfo: '#350d36',
          primaryText: 'white',
          secondaryText: 'rgb(188,171,188)'
        })
        break;
      case 'light':
        setBackColor({
          header: '#84c1ff',
          sidebar: '#add6ff ',
          chat: '#f8fbff',
          chatText: '#3385c6',
          chatSpan: '#add6ff',
          chatInfo: '#84c1ff',
          primaryText: '#2a4d69',
          secondaryText: '#63ace5'
        })
        break;
      case 'dark':
        setBackColor({
          header: '#000000',
          sidebar: '#2A2A2A',
          chat: '#545454',
          chatText: 'white',
          chatSpan: 'gray',
          chatInfo: 'lightgray',
          primaryText: 'white',
          secondaryText: 'lightgray'
        })
        break;
      default:
        break;
    }
  }

  return (
    <Container style={{backgroundColor: `${backColor.header}`, color: ''}}>
      <Main>
      <Theme>
            Theme
            <Normal value='normal' onClick={(e) => changeTheme(e)}></Normal>
            <Light value='light' onClick={(e) => changeTheme(e)} ></Light>
            <Dark value='dark' onClick={(e) => changeTheme(e)}></Dark>
          </Theme>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type='text' placeholder='Search...'/>
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>
          {user.name}
        </Name>
        <UserImage onClick={signOut}>
          <img src={user.photo ? user.photo : 'https://st3.depositphotos.com/15648834/17930/v/1600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'} alt='User Avatar'/>
        </UserImage>
      </UserContainer>
    </Container>
  )
}

export default Header;

const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
`

const Theme = styled.div`
  height: 100%;
  display: flex;
  position: absolute;
  padding-left: 18px;
  left: 0;
  align-items: center;
  color: white;
  font-weight: 600;
`

const Light = styled.button`
  background: #84c1ff;
  margin-left: 5px;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  :hover{
    border: 1px solid white;
  }

  :focus{
    border: 1px solid white;
  }
`

const Normal = styled.button`
  background: purple;
  margin-left: 3px;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  :hover{
    border: 1px solid white;
  }

  :focus{
    border: 1px solid white;
  }
`

const Dark = styled.button`
  background: black;
  margin-left: 3px;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  outline: none;

  :hover{
    border: 1px solid white;
  }

  :focus{
    border: 1px solid white;
  }
`


const Main = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
`

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  border-radius: 6px;
  width: 100%;
  display: flex;
  align-items: center;

  input{
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    width: 100%;
    color: white;
    outline: none;
  }
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`

const Name = styled.div`
  padding-right: 16px;
`

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  cursor: pointer;
  img{
    height: 100%;
  }
`
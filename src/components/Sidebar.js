import React, { useContext} from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItems } from '../data/SidebarData';
import db from '../firebase';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Sidebar({rooms, signOut}) {
  const history = useHistory();
  const {backColor} = useContext(AppContext);

  const gotToChannel = (id) =>{
    if(id){
      history.push(`/${id}`)
    }
  }

  const addChannel = () => {
    swal({
      text: 'Enter channel name:',
      content: "input",
      buttons: [true, true]
    })
    .then(name => {
      if(name){
        db.collection('rooms').add({name: name})
        .then(()=>  {swal("Channel Added", {
          icon: "success",
          })}
        ).catch((err)=>{
          swal('Something Went Wrong', {icon: "wrong"});
        })
      } else if (name === ''){
        swal('No Channel to Add', {icon: "warning"});
      }
    })
  }

  return (
    <Container style={{backgroundColor: `${backColor.sidebar}`, color: `${backColor.primaryText}`}}>
      <WorkspaceContainer>
        <Name>
          Clever Name
        </Name>
        <NewMessage>
          <AddCircleOutlineIcon style={{fill: `${backColor.sidebar}`}}/>
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels style={{color:  `${backColor.primaryText}`}}>
        {
          sidebarItems.map((item, index)=>(
            <MainChannelItem key={index}>
              {item.icon}
              {item.text}
            </MainChannelItem>  
          ))
        }
        
      </MainChannels>
      <ChannelsContainer style={{color: `${backColor.secondaryText}`}}>
        <NewChannelContainer>
          <div>
            Channels
          </div>
          <AddIcon style={{cursor: 'pointer'}} onClick={addChannel}/>
        </NewChannelContainer>
        <ChannelsList>
          { rooms.map((item, index)=>(
            <Channel key={index} onClick={()=>{gotToChannel(item.id)}}>
              # {item.name}
            </Channel>
            ))
          }
        </ChannelsList>
      </ChannelsContainer>
      <Logout onClick={signOut}>Log Out</Logout>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div`

`

const WorkspaceContainer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  padding-right: 19px;
  border-bottom: 1px solid #532753;
`

const Name = styled.div`

`

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const MainChannels = styled.div`
  padding-top: 20px;

`

const MainChannelItem = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover{
    background: #350d36;
  }
`
const ChannelsContainer = styled.div`
  padding-top: 10px;
`

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 19px;
`

const ChannelsList = styled.div`

`

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover{
    background: #350d36;
  }
`

const Logout = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  cursor: pointer;

`

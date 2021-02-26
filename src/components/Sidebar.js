import React from 'react';
import styled from 'styled-components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import { sidebarItems } from '../data/SidebarData';
import db from '../firebase';
import swal from 'sweetalert';

function Sidebar({rooms}) {

  const addChannel = () => {
    swal({
      text: 'Enter channel name:',
      content: "input",
      buttons: [true, true]
    })
    .then(name => {
      console.log(name)
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
    <Container>
      <WorkspaceContainer>
        <Name>
          Clever Name
        </Name>
        <NewMessage>
          <AddCircleOutlineIcon onClick={addChannel}/>
        </NewMessage>
      </WorkspaceContainer>
      <MainChannels>
        {
          sidebarItems.map((item)=>(
            <MainChannelItem>
              {item.icon}
              {item.text}
            </MainChannelItem>  
          ))
        }
        
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>
            Channels
          </div>
          <AddIcon />
        </NewChannelContainer>
        <ChannelsList>
          { rooms.map((item)=>(
            <Channel>
              # {item.name}
            </Channel>
            ))
          }
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  )
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
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
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const MainChannels = styled.div`
  padding-top: 20px;

`

const MainChannelItem = styled.div`
  color: rgb(188,171,188);
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
  color: rgb(188,171,188);
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

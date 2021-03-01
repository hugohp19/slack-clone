import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import db from './firebase';
import Chat from './components/Chat';
import Login from './components/Login';
import Header  from './components/Header';
import Sidebar from './components/Sidebar';
import styled from 'styled-components';
import { auth } from './firebase';
import { AppContextProvider } from './context/AppContext';

 
function App() {

  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const getChannels = () => {
    db.collection('rooms').onSnapshot((snapshot)=>{
      setRooms(snapshot.docs.map((doc)=>{
        return {id: doc.id, name:doc.data().name}
      }))
    })
  }

  const signOut = () => {
    auth.signOut().then(()=>{
      setUser(null);
      localStorage.removeItem('user');
    })

  }

  useEffect(() => {
    getChannels();
  }, [])

  return (
    <div className="App">
      <AppContextProvider>
        <Router>
          {
            !user ? 
            <Login setUser={setUser}/> :
            <Container>
              <Header user={user} signOut={signOut}/>
                <Main>
                <Sidebar rooms={rooms} signOut={signOut}/>  
                <Switch>
                  <Route path='/:channelId'>
                    <Chat user={user} />
                  </Route>
                  <Route path='/'>Select or create channel</Route>
                </Switch>
              </Main>
            </Container>
          }
        </Router>
      </AppContextProvider>    
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px minmax(0, 1fr);
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 260px auto;
`;
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route , Redirect } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Home from './components/page-Home/Home';
import Dashboard from './components/page-Dashboard/Dashboard';
import Contacts from './components/page-Contacts/Contacts';
import Timeline from './components/page-Timeline/Timeline';
import Login from './components/page-Login/Login';
import firebase from "firebase"
import { useGlobal } from 'reactn';





const App = props => {

  const [state,setState] = useState({
    SideDrawerOpen: false,
    isSignedIn: false,
  });
  const [ global, setGlobal ] = useGlobal();

  console.log("1",global.isSignedIn)

  


  const CallB = () => {
    setGlobal({...global,isSignedIn: false});
    setGlobal({...global,userData: null});
    localStorage.clear();
    firebase.auth().signOut();
    
  }
  const CallC = () =>{
    return global.isSignedIn;
  }
  const drawerToggleHandler = () => {

    setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };
  const backdropCloseHandler = () => {
    setState({...state,SideDrawerOpen: false});
  }


  const PrivateRoute = ({component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (global.isSignedIn ?  (<Component {...props}/>) :  (<Redirect to='/login' />)
    )} />
  )

    let backdrop;

    if(state.SideDrawerOpen){
      backdrop = <Backdrop backdropHandler={backdropCloseHandler}/>;
    }
    return (
      <div className="App" style={{height: '100%'}}>
        <main style={{marginTop: '200px'}}>
        <Router>
            <div>
            {global.isSignedIn ? (
              <nav>

                  <Navbar drawerHandler={drawerToggleHandler} isAuth={CallC} signOut={CallB}/>
                  <SideDrawer show={state.SideDrawerOpen} closeHandler={backdropCloseHandler}/>  
                  {backdrop}
              </nav>  
                ) : (<SideDrawer show={global.SideDrawerOpen} closeHandler={backdropCloseHandler}/>)}


              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/dashboard' component={Dashboard} />
                  <PrivateRoute path='/contacts' component={Contacts} />
                  <PrivateRoute path='/timeline' component={Timeline} />
                  <Route path='/login' render={(props) => <Login {...props} />} />
              </Switch>
            </div>
          </Router>
        </main>
      </div>

    );
  
}

export default App;

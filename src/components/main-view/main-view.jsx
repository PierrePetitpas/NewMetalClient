import React from 'react';
import axios from 'axios';
import { Navbar, Nav, Form, Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
import { HashRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { BandView } from '../band-view/band-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { useHistory } from "react-router-dom";
import { GenreView } from '../genre-view/genre-view';
import { LabelView } from '../label-view/label-view';
import { ProfileView } from '../profile-view/profile-view';
import { Link } from "react-router-dom";

import { setBands } from '../../actions/actions';
import BandsList from '../bands-list/bands-list';
import NavBar from '../nav-bar/nav-bar';
import DropdownMenu from '@restart/ui/esm/DropdownMenu';

class MainView extends React.Component {
    
    constructor (){
        super();
        this.state = {
            selectedBand: null,
            user: null
        }
    }
    
    componentDidMount(){
            let accessToken = localStorage.getItem('token');
            if (accessToken !== null) {
                this.setState ({
                    user: localStorage.getItem('user')
                });
                this.getBands(accessToken);
            }
         }
            
    setSelectedBand(newSelectedBand) {
        this.setState({
          selectedBand: newSelectedBand
        });
      }
    
      /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

  onLoggedIn(authData) {
      console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getBands(authData.token);
  }

  
 getBands(token) {
     axios.get('https://mybands.herokuapp.com/bands', {
         headers: {Authorization: `Bearer ${token}`}
     })
     .then(response => {
         this.props.setBands(response.data);
     })
     .catch(function (error){
         console.log(error);
     })
 }

 onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }

  onRegistration(register) {
    this.setState({
      register
    });
  }

    render() {
       const {  user, register } = this.state;
       let { bands } = this.props;

       return (
           
     <Router>
                
              
                <NavBar user={user} />

                    
                <Route exact path="/" render={() => {

                        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
                       if (bands.length === 0) return <div className="main-view" />;
                     

                      return <BandsList bands= {bands}/>;
                    }} />

                    <Route path="/bands/:bandId" render={({match, history })  => {
                         if (!user) return <Col>
                         <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                         </Col>
 
                         if (bands.length === 0) return <div className="main-view" />;
                            return <Col>
                                <BandView band={bands.find(m => m._id === match.params.bandId)} onBackClick={() => history.goBack()} />
                                </Col>
                        }} />

                    <Route path="/register" render={() => {
                        if (user) return <Redirect to="/" />
                        return <Col>
                            <RegistrationView />
                        </Col>
                        }} />

                    <Route path="/genres/:name" render={({ match, history }) => {
                       console.log(match)
                       if (!user) 
                            return 
                                <Col>
                                    <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
                                </Col>
                        if (bands.length === 0) return <div className="main-view" />;
                        return <Col>
                                    <GenreView genre={bands.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                                </Col>
                            }
                        } />

                        
                  <Route path="/labels/:name" render={({ match, history }) => {
                        if (!user) return <Col>
                        <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                        </Col>

                        if (bands.length === 0) return <div className="main-view" />;
                        return <Col>
                            <LabelView label={bands.find(m => m.Label.Name === match.params.name).Label} onBackClick={() => history.goBack()} />
                        </Col>
                        }
                    } />


                    <Route path="/users/:username" render={({ match, history }) => {

                            if (!user) return <Col>
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>

                            if (bands.length === 0) return <div className="main-view" />;
                            return <Col>
                                <ProfileView  bands={bands} user={user} onBackClick={() => history.goBack()} />
                            </Col>
                    }
                    } />

                    

            </Router>

       );
    }
}

let mapStateToProps = state =>{
    return { bands: state.bands }
}

export default connect(mapStateToProps, { setBands }) (MainView);
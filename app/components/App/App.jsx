import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/index';
import SideBar from '../SideBar/index';
import Home from '../Home/index';
import Page1 from '../Page1/index';
import Page2 from '../Page2/index';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends React.Component {
    render(){
      const containerStyle = {
        marginLeft: '200px'
      }
  
      return (
        <Router>
          <React.Fragment>
            <Container maxWidth='sm'>
              <Header />
              <SideBar />
              <div style={containerStyle}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/page1" component={Page1} />
                  <Route path="/page2" component={Page2} />
                </Switch>
              </div>
            </Container>
          </React.Fragment>
        </Router>
      )
    }
  }

export default App;
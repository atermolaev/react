import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/index';
import SideBar from '../SideBar/index';
import Home from '../Home/index';
import Page1 from '../Page1/index';
import Page2 from '../Page2/index';
import Logo from '../Logo/index';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

class App extends React.Component {
    render(){
      return (
        <Router>
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <Logo />
              </Grid>
              <Grid item xs={10}>
                <Header />
              </Grid>
              <Grid item xs={2}>
                <SideBar />
              </Grid>
              <Grid item xs={10}>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/page1" component={Page1} />
                  <Route path="/page2" component={Page2} />
                </Switch>
              </Grid>
            </Grid>
          </Container>
        </Router>
      )
    }
  }

export default App;
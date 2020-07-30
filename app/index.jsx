import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/index.jsx';
import SideBar from './components/SIdeBar/index.jsx';
import Home from './components/Home/index.jsx';
import Page1 from './components/Page1/index.jsx';
import Page2 from './components/Page2/index.jsx';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <SideBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));

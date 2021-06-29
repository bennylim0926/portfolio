import './Css/index.css'
import * as React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from 'react-router-dom';
import { Link as Rlink } from "react-router-dom";
import { createBrowserHistory } from 'history';
import SideMenu from './React/sideMenu';
import Portfolio from './React/mainContent';
import ScrollToTop from './React/ScrollToTop';
import ProjectDetails from './React/projects'
import Home from './React/Home'
import Tictactoe from './React/tictactoe';
import { ChakraProvider } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Project1, Project2,Project3,Project4,Project5,Project6 } from './React/Data'

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    }
  }
  clickHambuger() {
    this.setState({
      isShow: !this.state.isShow,
    })
  }
  render() {
    const navItem = [
      {
        itemName: '',
        itemLink: '',
        cName: '',
      },
      {
        itemName: 'Home',
        itemLink: '/',
        cName: 'navItem',
      },
      {
        itemName: 'Portfolio',
        itemLink: '/portfolio',
        cName: 'navItem',
      },
      // {
      //   itemName: 'Mini-Game',
      //   itemLink: '/game',
      //   cName: 'navItem',
      // },
    ]    
    let location =window.location.pathname;
    console.log(location);
    const className = this.state.isShow ? "alternateSideBar" : "alternateSideBarhide"
    return (
      <div className="NavBar-Background">
        <HStack spacing={10} className="NavBar" bg={'gray.700'}>
          <li className="sideBarButton">
            <Button onClick={() => this.clickHambuger()} >
              <HamburgerIcon></HamburgerIcon>
            </Button>
          </li> 
          {navItem.map((item, index) => {
            return (
              <li className={item.cName} key={index}>
                <Rlink to={item.itemLink}> {item.itemName} </Rlink>
              </li>
            )
          })}
        </HStack>
        <SideMenu name={className} buttonName="closeButton" handleClick={() => this.clickHambuger()} />
      </div >
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div className='bottomFooter'>
        <div className="footer">
          @bennylim0926@gmail.com @bennylim   
        </div>
      </div>
    )
  }
}



function App({ Component }) {  
  return (
    <ChakraProvider>
      <Router history={createBrowserHistory()}>
        <ScrollToTop />
        <NavigationBar />
        <Switch>
          
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/game" component={Tictactoe} />
          <Route path="/portfolio/CollapsedGray" render={() => (
            <ProjectDetails project={Project1} />
          )} />
          <Route path="/portfolio/ApocaForce" render={() => (
            <ProjectDetails project={Project2} />
          )} />
          <Route path="/portfolio/Iseikai" render={() => (
            <ProjectDetails project={Project3} />
          )} />
          <Route path="/portfolio/DrawMania" render={() => (
            <ProjectDetails project={Project4} />
          )} />
          <Route path="/portfolio/HumanSystemAr" render={() => (
            <ProjectDetails project={Project5} />
          )} />
          <Route path="/portfolio/Awaken2050" render={() => (
            <ProjectDetails project={Project6} />
          )} />
        </Switch>
        <Footer />
      </Router>
    </ChakraProvider>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

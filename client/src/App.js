import React, { Fragment, } from 'react'
import { Route, Switch, } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import { Container, } from "semantic-ui-react"
import Stuffs from './components/Stuffs'
import Navbar from './components/Navbar'
import StuffsForm from './components/StuffsForm'
import StuffView from './components/StuffView'

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/stuffs" component={Stuffs} />
        <Route exact path="/stuffs/new" component={StuffsForm} />
        <Route exact path="/stuffs/:id" component={StuffView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)

export default App


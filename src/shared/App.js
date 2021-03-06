import React, { Component } from 'react'
import routes from './routes'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import Topo from './Topo'
import Rodape from './Rodape'
import NoMatch from './NoMatch'

class App extends Component {    
  render() {
    return (
      <div>
        <Topo/>
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route key={path} path={path} exact={exact} render={(props) => (
              <Component {...props} {...rest} />
            )} />
          ))}
          <Route render={(props) => <NoMatch {...props} /> } />
        </Switch>
        <Rodape/>
      </div>
    )
  }
}

export default App
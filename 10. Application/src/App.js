import React, { Component } from 'react';
import { Route, Switch, withRouter,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';
import asyncComponent from './hoc/asyncComponent/asyncComponent';


const asycCheckout = asyncComponent(()=>{
  return import('./containers/Checkout/Checkout')
});
const asycOrder = asyncComponent(()=>{
  return import('./containers/Orders/Orders')
});
const asycAuth = asyncComponent(()=>{
  return import('./containers/Auth/Auth')
});
class App extends Component {
  componentDidMount() {
    this.props.onTypeAutoSingup();
  }
  render() {
    let routes = (
      <Switch>
        <Route path="/auth" component={asycAuth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/"/>
      </Switch>

    );
    if (this.props.isAuthenticated) {
      routes =(
        <Switch>
        <Route path="/checkout" component={asycCheckout} />
        <Route path="/orders" component={asycOrder} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/auth" component={asycAuth} />
        <Redirect to="/"/>
      </Switch>
      )
    }
    return (
      <div>
        <Layout>
         {routes}
        </Layout>
      </div>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {
    onTypeAutoSingup: () => dispatch(actions.authCheckState())
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}
export default withRouter(connect(mapStateToProps, mapDispathToProps)(App));

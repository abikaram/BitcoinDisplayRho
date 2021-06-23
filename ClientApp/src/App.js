import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { About } from './components/FetchData';
import { PriceChart } from './components/Chart';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/chart' component={PriceChart} />
        <Route path='/about' component={About} />
      </Layout>
    );
  }
}

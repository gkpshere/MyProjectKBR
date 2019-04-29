import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import HomeContainer from './containers/container-Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Index from './components/Pages/Index'

export default () => (
  <Layout>
    <Route exact path='/' component={HomeContainer} />
    <Route exact path='/index' component={Index} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
  </Layout>
);

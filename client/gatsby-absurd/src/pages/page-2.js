import React from 'react';
import { Router } from "@reach/router"


import Layout from '@common/Layout';
import { Container } from '@components/global';

import StartForm from '@sections/StartForm'
import Test from '@sections/Test'


const SecondPage = () => (
  <Layout>
    <Container>
      <Router>
        <StartForm path="/page-2"/>
        <Test path="/page-2/test"></Test>
      </Router>
    </Container>
    
  </Layout>
);

export default SecondPage;

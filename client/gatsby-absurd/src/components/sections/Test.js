import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

const Test = () => {
    // const data = useStaticQuery(graphql``)

    return (
        <Container>
            <h1>Test Page</h1>
        </Container>
        
    )
}

export default Test
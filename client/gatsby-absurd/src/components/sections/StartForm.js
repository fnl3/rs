import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from "@reach/router"

import Img from 'gatsby-image';

import { Container } from '@components/global';

const StartForm = () => {
    // const data = useStaticQuery(graphql``)

    return (
        <Container>
            <form>
                <label>
                    Looking For:
                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>

                <label>
                    I Am:
                    <select>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </label>

                <label>
                    My Vibe:
                    <select>
                        <option value="Sporty">Sporty</option>
                        <option value="Preppy">Preppy</option>
                    </select>
                </label>

                <label>
                    My Age:
                    <input />
                </label>

                <p>We'll use this info to customize your profile</p>

                <Link to="/page-2/test">Next Section</Link>
            </form>
        </Container>
    )
}

export default StartForm
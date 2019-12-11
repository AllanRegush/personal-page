import React from "react";
import styled from 'styled-components';

import Card from './Card'

const StyledDiv = styled.div`
    background-color: red;
    min-height: 400px;
    display: flex;
    align-items: center;
`;


const Projects = () => (
    <StyledDiv>
        <Card />
    </StyledDiv>
);

export default Projects;
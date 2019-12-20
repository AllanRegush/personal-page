import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    background: grey;
    align-items: center;
    min-height: 80vh;
    h1,h2 {
        margin:0;
        line-height: 5.5rem;
        
    }
    h1 {
        font-weight: 400;
    }
    .lg-heading {
        font-size: 6rem;
    }
`;


const Hero = () => (
    <StyledDiv>
        <div>
            <h1 className="lg-heading">Allan Regush</h1>
            <h2 className="sm-heading">Hardware/Software Developer</h2>
            <div>
                <a></a>
                <a></a>
            </div>
        </div>

    </StyledDiv>
);

export default Hero
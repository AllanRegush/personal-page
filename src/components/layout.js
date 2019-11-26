/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from "./header"

const theme = {
  maxWidth: '1000px',
  minHeight: '80vh',
}

const StyledPage = styled.div`
  background: lightgray;
  color: black;
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  min-height: ${props => props.theme.minHeight};
`;

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    width: 100%;
    min-height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <React.Fragment>
    <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Inner>
            {children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    </React.Fragment>    
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

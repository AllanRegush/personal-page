import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from '../components/Hero';
import Projects from '../components/Projects';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Projects />
  </Layout>
)

export default IndexPage

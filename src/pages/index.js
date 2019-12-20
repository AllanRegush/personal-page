import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage

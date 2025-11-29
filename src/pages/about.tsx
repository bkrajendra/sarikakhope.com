import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import Layout from "../components/layout"


const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Aout Sarika's World">
      <p>I am Sarika khope.</p>
    </Layout>
  )
}

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="Your description" />
  </>
)
export default AboutPage
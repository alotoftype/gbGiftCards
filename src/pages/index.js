import React from "react"
import { Box } from 'rebass';
import { Link } from "gatsby"

import '../styles/main.scss';
//import Layout from '../components/layout';


const IndexPage = () => (
  <>
    <Box p={3} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="magenta">
    </Box>
    <Link to={"page-2"} />
  </>
)

export default IndexPage

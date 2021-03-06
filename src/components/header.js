import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Root = styled.div`
  background-color: #5e72e4;
`
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 70%;
  padding: 1rem;
`

const Header = ({ siteTitle }) => (
  <Root>
    <Wrapper>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          {siteTitle}
        </Link>
      </h1>
    </Wrapper>
  </Root>
)

export default Header

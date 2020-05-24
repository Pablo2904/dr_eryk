import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { theme } from 'layout/theme'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`
const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.grey };
  color: ${({ theme }) => theme.colors.white };
  height: ${({ theme }) => theme.screenHeight.full };
  ${({theme}) => theme.flexEnd };
`

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
)

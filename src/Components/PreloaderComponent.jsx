import React from 'react'
import styled from 'styled-components'

const StyledPreloaderComponent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  .loading-spinner {
    display: inline-block;
    width: 7rem;
    height: 7rem;
    border: 8px solid var(--c-secondary);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const PreloaderComponent = () => {
  return (
    <StyledPreloaderComponent>
      <div className="loading-spinner" />
    </StyledPreloaderComponent>
  )
}

export default PreloaderComponent

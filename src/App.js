import React from 'react'
import GlobalStyledProvide from './HOC/GlobalStyledProvider'
import MainLayouts from './Layouts/MainLayouts'
function App() {
  return (
    <>
      <GlobalStyledProvide />
      <MainLayouts />
    </>
  )
}

export default App

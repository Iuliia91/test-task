import React from 'react'
import styled from 'styled-components'
import { mockUpsFont } from '../helpers/mockUps'
import IntroductionComponent from '../Scenes/IntroductionComponent/IntroductionComponent'
import NewUserCreate from '../Scenes/NewUser/NewUserCreate'
import UserList from '../Scenes/UserList/UserList'
const StyledMainLayouts = styled.div`
  .titel {
    ${mockUpsFont.heading}
  }
`

const MainLayouts = () => {
  return (
    <StyledMainLayouts>
      <IntroductionComponent />
      <UserList />
      <NewUserCreate />
    </StyledMainLayouts>
  )
}

export default MainLayouts

import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { mockUpsFont } from '../helpers/mockUps'
import IntroductionComponent from '../Scenes/IntroductionComponent/IntroductionComponent'
import NewUserCreate from '../Scenes/NewUser/NewUserCreate'
import UserList from '../Scenes/UserList/UserList'
import { getData } from '../helpers/getUserList'
const StyledMainLayouts = styled.div`
  .titel {
    ${mockUpsFont.heading}
  }
`

const MainLayouts = () => {
  const [userList, setUserList] = useState()
  const [newLink, setNewLink] = useState(
    'https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6'
  )
  const [buttonDisable, setButtonDisable] = useState(false)

  const handleShowMoreUsers = () => {
    if (userList.links.next_url === null) {
      setButtonDisable(true)
      return
    } else {
      setNewLink(userList.links.next_url)
    }
  }
  useEffect(() => {
    getData(newLink).then((response) => {
      setUserList(response)
    })
  }, [newLink])
  return (
    <StyledMainLayouts>
      <IntroductionComponent />
      <UserList
        userList={userList}
        handleShowMoreUsers={() => handleShowMoreUsers()}
        buttonDisable={buttonDisable}
      />
      <NewUserCreate />
    </StyledMainLayouts>
  )
}

export default MainLayouts

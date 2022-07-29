import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './UserListComponents/Card'
import { mockUpsFont, mocUpsButton, mocUpMedia } from '../../helpers/mockUps'
import PreloaderComponent from '../../Components/PreloaderComponent'
const StyledUserList = styled.div`
  padding: 140px 0;

  margin: auto;
  .block_list {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .list {
    display: grid;
    gap: 29px 29px;
    grid-template-columns: repeat(3, 23em);
    margin-bottom: 50px;
  }
  div {
    text-align: center;
  }
  .button {
    ${mockUpsFont.bodyFont}
    width: 120px;
    height: 34px;
    border-radius: 80px;
    background: var(--c-primary);
    border: none;
    :hover {
      background: yellow;
    }
  }

  h1 {
    ${mockUpsFont.heading}
    margin-bottom:50px;
  }
  .disable {
    ${mocUpsButton.disableButton}
  }
  ${mocUpMedia.media1024}
  ${mocUpMedia.media768}
`

const UserList = (props) => {
  return (
    <StyledUserList id="user_list">
      <h1>Working with GET request</h1>
      <div className="block_list">
        <div className="list">
          {props.userList ? (
            props.userList.users.map((item) => {
              return <Card item={item} />
            })
          ) : (
            <PreloaderComponent />
          )}
        </div>
      </div>
      <div>
        <button
          onClick={props.handleShowMoreUsers}
          className={props.buttonDisable ? 'disable' : 'button'}
        >
          Show more
        </button>
      </div>
    </StyledUserList>
  )
}

export default UserList

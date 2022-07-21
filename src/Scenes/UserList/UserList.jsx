import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { mockUpsFont, mocUpsButton, mocUpMedia } from '../../helpers/mockUps'
import PreloaderComponent from '../../Components/PreloaderComponent'
const StyledUserList = styled.div`
  max-width: 1170px;
  padding: 140px 0;

  margin: auto;
  .block_list {
    position: relative;
  }
  .list {
    display: grid;
    gap: 29px 29px;
    grid-template-columns: repeat(3, 370px);
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

const StyledCard = styled.div`
  .block_card {
    background: var(--c-white);
    border-radius: 20px;
    width: 100%;
    padding: 10px 0;
  }

  .card {
    width: 242px;
    height: 234px;
    display: flex;
    flex-direction: column;
    margin: auto;
    overflow-y: auto;

    p {
      ${mockUpsFont.bodyFont}
      margin: 0;
      word-break: break-all;
    }
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin: 15px auto;
    gap: 20px;
  }

  .block_text {
    padding-top: 20px;
  }

  ${mocUpMedia.media768}
`
const Card = (props) => {
  return (
    <StyledCard>
      <div className="block_card">
        <div key={props.item.id} className="card">
          <img src={props.item.photo} alt="phote" type="normal" />

          <p>{props.item.name}</p>
          <div className="block_text">
            <p>{props.item.position}</p>
            <p>{props.item.email}</p>
            <p>{props.item.phone}</p>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

const getData = (url) => {
  if (url === null) {
    return console.log('finished')
  } else {
    return axios
      .get(url)
      .then(({ data }) => {
        return data
      })
      .catch((e) => alert('smt went wrong'))
  }
}

const UserList = () => {
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
    <StyledUserList>
      <h1>Working with GET request</h1>
      <div className="block_list">
        <div className="list">
          {userList ? (
            userList.users.map((item) => {
              return <Card item={item} />
            })
          ) : (
            <PreloaderComponent />
          )}
        </div>
      </div>
      <div>
        <button
          onClick={() => handleShowMoreUsers()}
          className={buttonDisable ? 'disable' : 'button'}
        >
          Show more
        </button>
      </div>
    </StyledUserList>
  )
}

export default UserList

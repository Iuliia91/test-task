import React from 'react'
import styled from 'styled-components'
import logo from '../../../assest/imgases/Logo.png'
import { mocUpsButton, mocUpsBlock, mocUpMedia } from '../../../helpers/mockUps'
import { Link } from 'react-scroll'
const StyledHeader = styled.div`
  width: 100vw;
  height: 60px;
  background-color: var(--c-white);

  .header {
    height: 60px;
    ${mocUpsBlock.flexRow}
    max-width: 1170px;
    align-items: center;
    margin: auto;
  }

  .header div {
    ${mocUpsBlock.flexRow}
    width:210px;
    gap: 10px;
  }
  .header button {
    ${mocUpsButton.button}
  }
  ${mocUpMedia.media1024}
`

const Header = () => {
  return (
    <StyledHeader>
      <div className="header">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div>
          <button>
            {' '}
            <Link to="user_list" smooth={true} offset={50}>
              {' '}
              Users
            </Link>
          </button>
          <button>
            <Link to="user_create" smooth={true} offset={50}>
              Sing up
            </Link>
          </button>
        </div>
      </div>
    </StyledHeader>
  )
}

export default Header

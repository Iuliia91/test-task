import { css } from 'styled-components'

export const mockUpsFont = {
  heading: () => css`
    font-family: 'Nunito';
    font-size: 40px;
    line-height: 40px;
    text-align: center;
  `,
  bodyFont: () => css`
    font-family: 'Nunito';
    font-size: 16px;
    line-height: 26px;
    text-align: center;
  `,
}

export const mocUpsBlock = {
  flexColumn: () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 21px;
    p {
      margin: 0;
    }
  `,
  flexRow: () => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  flexBlockCenter: () => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
}

export const mocUpsButton = {
  button: () => css`
    ${mockUpsFont.bodyFont}

    width: 100px;
    height: 34px;
    border-radius: 80px;
    background: var(--c-primary);
    border: none;
    :hover {
      background: yellow;
    }
  `,
  disableButton: () => css`
    ${mockUpsFont.bodyFont}
    width: 100px;
    height: 34px;
    border-radius: 80px;
    background: grey;
    border: none;
  `,
}

export const mocUpMedia = {
  media1024: () => css`
    @media only screen and (max-width: 1024px) {
      max-width: 1024px;
      .block_list {
        display: flex;
        justify-content: center;
      }
      .list {
        grid-template-columns: repeat(3, 28vw);
      }

      .header {
        width: 88%;
      }
      .header div {
        width: 210px;
      }
    }
  `,
  media768: () => css`
    @media only screen and (max-width: 768px) {
      max-width: 704px;
      .block_list {
        display: flex;
        justify-content: center;
      }
      .list {
        display: grid;
        gap: 16px 16px;
        grid-template-columns: repeat(2, 45vw);
      }

      .block_card {
        width: 100%;
        padding: 10px 0;
      }
      .card {
        width: 100%;
        height: 234px;
      }
    }
  `,
}

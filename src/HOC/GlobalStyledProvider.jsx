import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Nunito from '../assest/font-family/Nunito-Regular.ttf'

const GlobalStyled = createGlobalStyle`
:root{
  --c-primary:#F4E041;
  --c-secondary:#00BDD3;
  --c-background:#E5E5E5;
  --c-input:#D0CFCF;
  --c-black:#000000;
  --c-white:#FFFFFF;
}

body{
background-color:var(--c-background);
}
@font-face{
  font-family:"Nunito";
  src:url(${Nunito});
}

@mixin heading{
 font-family:'Nunito';
 font-size:40px;
 line-height: 40px;
}

@mixin body-font{
  font-family:'Nunito';
  font-size:16px;
  line-height: 26px;
}



`

class GlobalStyledProvide extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyled />
      </React.Fragment>
    )
  }
}

export default GlobalStyledProvide

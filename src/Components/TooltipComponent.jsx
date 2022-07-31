import React, { useState } from 'react'
import styled from 'styled-components'
import { mockUpsFont, mocUpMedia } from '../helpers/mockUps'

const StyledTooltipCpmponent = styled.div`
  .Tooltip-Wrapper {
    width: 100%;
    display: inline-block;
    position: relative;
  }
  .Tooltip-Tip {
    position: absolute;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 6px;
    P {
      background: black;
      color: white;
      padding: 5px 20px;
      white-space: nowrap;
      ${mockUpsFont.bodyFont}
    }
  }
  ${mocUpMedia.media360}
`

const TooltipComponent = (props) => {
  let timeout
  const [active, setActive] = useState(false)

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, props.delay || 400)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <StyledTooltipCpmponent>
      <div
        className="Tooltip-Wrapper"
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >
        {props.children}
        {active && props.content && (
          <div className={`Tooltip-Tip ${props.direction || 'top'}`}>
            <p>{props.content}</p>
          </div>
        )}
      </div>
    </StyledTooltipCpmponent>
  )
}

export default TooltipComponent

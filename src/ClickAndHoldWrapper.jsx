import React, { useState } from 'react'
import PropTypes from 'prop-types'

const holdDistance = 3 ** 2 // pixels squared

const ClickAndHold = ({ id, elmType = 'div', timeOut = 500, onClick = () => {}, onHold = () => {}, children, ...other }) => {
  const [timer, setTimer] = useState(null)
  const [pos, setPos] = useState([0, 0])

  const onPointerDown = evt => {
    evt.persist()
    setPos([evt.clientX, evt.clientY])
    const timeoutId = setTimeout(() => timesup(evt), timeOut)
    setTimer(timeoutId)
  }

  const onPointerUp = evt => {
    if (timer) {
      clearTimeout(timer)
      setTimer(null)
      onClick(evt)
    }
  }

  const onPointerMove = evt => {
    if (timer) {
      const d = (evt.clientX - pos[0]) ** 2 + (evt.clientY - pos[1]) ** 2
      if (d > holdDistance) {
        setTimer(null)
        clearTimeout(timer)
      }
    }
  }

  const timesup = evt => {
    setTimer(null)
    onHold(evt)
  }
  return React.createElement(elmType, { onPointerDown, onPointerUp, onPointerMove, other }, ...children)
}

ClickAndHold.propTypes = {
  id: PropTypes.number,
  elmType: PropTypes.string,
  timeOut: PropTypes.number,
  onClick: PropTypes.func,
  onHold: PropTypes.func,
  children: PropTypes.object
}

export default ClickAndHold

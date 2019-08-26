import React, { useEffect, useState } from 'react'
import posed, { PoseGroup } from 'react-pose'

const HeroContent = posed.div({
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
  exit: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    rotateX: -25,
  },
})

export default ({ title, description }) => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setVisible(true)
    return () => setVisible(false)
  }, [])
  return (
    <PoseGroup>
      {visible && (
        <HeroContent key={'hero'} className={'hero'}>
          <h1 className={'hero-title'}>{title}</h1>
          <p className={'hero-description lead mb-0'}>{description}</p>
        </HeroContent>
      )}
    </PoseGroup>
  )
}

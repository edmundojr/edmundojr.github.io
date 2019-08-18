import React, { useEffect, useState } from 'react'
import posed, { PoseGroup } from 'react-pose'

const HeroContent = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 100,
    transition: {
      y: { type: 'spring', stiffness: 250, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: { duration: 300 },
  },
})

export const Hero = React.memo(({ title, description }) => {
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
})

Hero.displayName = 'Hero'

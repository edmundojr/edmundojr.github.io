import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Hero = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 57ch;
  height: 70vh;
  max-height: 28rem;
  min-height: 20rem;
  padding: calc(var(--grid-gap) * 2) 0 var(--grid-gap);
  margin: 0 auto;
  text-align: center;

  h1 {
    margin-bottom: 0.5rem;
    font-size: var(--display1-size);
    font-weight: var(--display-font-weight);
    line-height: var(--display-line-height);
  }

  p {
    margin-bottom: 0;
    opacity: 0.8;
  }
`

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { y: 10, scale: 0.95, opacity: 0 },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

export default ({ title, description }) => (
  <Hero variants={container} initial="hidden" animate="visible">
    <motion.h1 variants={item}>{title}</motion.h1>
    <motion.p variants={item}>{description}</motion.p>
  </Hero>
)

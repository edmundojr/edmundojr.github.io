import React from 'react'
import { Helmet } from 'react-helmet'
import { Hero, Layout } from '../components'

export default () => (
  <Layout>
    <Helmet title={'Edmundo Santos, Designer'} />
    <Hero
      title={[
        'Hi, I’m Ed! ',
        <span key={'wave'} className="flip">
          <small className={'wave'}>👋</small>
        </span>,
      ]}
      description={['Designer currently living in ', <s key={'dublin'}>Dublin</s>, ' Cork, Ireland.']}
    />
    {/*<main className={'post-content container-grid'}>
      <h1>My Journey</h1>
      <p>
        I’m multi-disciplinary designer from Brazil, currently working and living in <s>Dublin</s> Cork, Ireland. I
        guess my journey is similar to others, I’ve started my career as a finished artist – which entails checking
        for mistakes and configuring artwork for print production, and after a little while I moved to graphic
        design, designing pretty much everything that could be printed on paper – book design, brand design,
        business cards, the lot! I work as a graphic designer for about 5 years or so.
      </p>{' '}
      <p>
        On that same job I had the opportunity to design and develop the company’s website (mostly because the
        company didn’t have anyone else to do it), and I immediatilly fell in love with UI design, both the design
        and implementation aspects of it.
      </p>
      <p>
        From that point onward, I change my focus to UI design and development. It was not a big change really, as
        most of the skills were still valid and transferable from my previous life as a graphic designer. What was
        really new and exciting was getting to implement and code the UIs I would come up with, playing with
        different transitions and animations… basically lots of fun!
      </p>
      <p>
        For the next 5 years I worked mostly doing web design and front-end development, and with every website I
        did I would focus more and more on the user experience side of things, which finally brought me to UI/UX
        design.
      </p>
      <p>
        Today I considered myself a product designer, and my routine consists of researching, designing,
        prototyping, coding, user testing… all of the UI/UX keywords really!
      </p>
      <p>If you made this far, thanks! I hope you find a better use of your time in the future! 😅</p>
    </main>*/}
  </Layout>
)

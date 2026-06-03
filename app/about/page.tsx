import React from 'react'
import HeroAbout from '../components/about/Hero_about'
import History from '../components/about/History'
import Philosophy from '../components/about/Philosophy'
import Tour from '../components/about/Tour'
import Sponsors from '../components/about/Sponsors'

const about = () => {
  return (
    <div>
      <HeroAbout />
      <History />
      <Philosophy />
      <Tour />
      <Sponsors />
    </div>
  )
}

export default about
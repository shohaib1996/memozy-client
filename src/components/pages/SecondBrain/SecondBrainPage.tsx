
import React from 'react'
import dynamic from 'next/dynamic'

const OverloadedMind = dynamic(() => import('./OverloadedMind'))
const MemozySecondBrainPage = dynamic(() => import('./MemozySecondBrain').then(mod => mod.MemozySecondBrainPage))
const CoreFeaturesGrid = dynamic(() => import('./CoreFeaturesGrid'))
const WhySecondBrainMatters = dynamic(() => import('./WhySecondBrainMatter').then(mod => mod.WhySecondBrainMatters))
const RoadmapSection = dynamic(() => import('./RoadmapSection').then(mod => mod.RoadmapSection))
const JoinMovementSection = dynamic(() => import('./JoinMovementSection').then(mod => mod.JoinMovementSection))

const SecondBrainPage = () => {
  return (
    <>
      <MemozySecondBrainPage/>
      <OverloadedMind/>
      <CoreFeaturesGrid/>
      <WhySecondBrainMatters/>
      <RoadmapSection/>
      <JoinMovementSection/>
    </>
  )
}

export default SecondBrainPage

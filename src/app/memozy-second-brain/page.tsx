import SecondBrainPage from '@/components/pages/SecondBrain/SecondBrainPage'
import React from 'react'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Memozy - Your Second Brain',
}

const MemozySecondBrain = () => {
  return (
    <SecondBrainPage/>
  )
}

export default MemozySecondBrain

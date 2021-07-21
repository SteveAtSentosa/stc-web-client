import React from 'react'
import HeadShot from '../components/HeadShot'
export const Home = () => {

  const st= {
    root:  'flex-col-centered mt-16',
    label: 'text-xs font-bold text-gray-600',
    blurb: 'mt-4 ml-4 text-md text-gray-500 max-w-xs text-center'

  }
  return (
    <div className={st.root}>
      <div className={st.label}>Some Page</div>
    </div>
  )
}
export default Home

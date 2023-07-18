import React from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Private Necessary Aardvark</title>
        <meta property="og:title" content="Private Necessary Aardvark" />
      </Helmet>
      <DataProvider
        renderSuccess={(params) => (
          <Repeater
            items={params}
            renderItem={(context_f5bwid) => (
              <fragment>
                <h1>{context_f5bwid?.slug}</h1>
              </fragment>
            )}
          />
        )}
      />
    </div>
  )
}

export default Home

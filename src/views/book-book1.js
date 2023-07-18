import React from 'react'

import { DataProvider } from '@teleporthq/react-components'
import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './book-book1.css'

const BookBook1 = (props) => {
  return (
    <div className="book-book1-container">
      <Helmet>
        <title>Book1 - Private Necessary Aardvark</title>
        <meta
          property="og:title"
          content="Book1 - Private Necessary Aardvark"
        />
      </Helmet>
      <DataProvider
        renderSuccess={(BookEntity) => (
          <fragment>
            <div className="book-book1-container1">
              <h1>{BookEntity?.title?.rendered}</h1>
              <div className="book-book1-container2">
                <DangerousHTML
                  html={BookEntity?.content?.rendered}
                  className="book-book1-html-node"
                ></DangerousHTML>
              </div>
            </div>
          </fragment>
        )}
        initialData={props.bookEntity}
        persistDataDuringLoading={true}
      />
    </div>
  )
}

BookBook1.defaultProps = {
  bookEntity: [],
}

BookBook1.propTypes = {
  bookEntity: PropTypes.array,
}

export default BookBook1

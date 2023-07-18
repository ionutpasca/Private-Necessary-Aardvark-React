import React from 'react'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import './bookpage-book.css'

const BookpageBook = (props) => {
  return (
    <div className="bookpage-book-container">
      <Helmet>
        <title>Book - Private Necessary Aardvark</title>
        <meta property="og:title" content="Book - Private Necessary Aardvark" />
      </Helmet>
      <DataProvider
        renderSuccess={(params) => (
          <Repeater
            items={params}
            renderItem={(BookEntities) => (
              <fragment>
                <div className="bookpage-book-container1">
                  <h1>{BookEntities?.title?.rendered}</h1>
                  <span>{BookEntities?.acf?.publisher}</span>
                  <span>{BookEntities?.acf?.description}</span>
                  <span>{BookEntities?.acf?.richtext}</span>
                  <span>{BookEntities?.acf?.another_rich_text}</span>
                </div>
              </fragment>
            )}
          />
        )}
        initialData={props.bookEntities}
        persistDataDuringLoading={true}
      />
    </div>
  )
}

BookpageBook.defaultProps = {
  bookEntities: [],
}

BookpageBook.propTypes = {
  bookEntities: PropTypes.array,
}

export default BookpageBook

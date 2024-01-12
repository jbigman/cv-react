import React from 'react'
import FormattedMessage from './FormattedMessage'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="intro-text">
          <div className="intro-lead-in">
            <FormattedMessage id={'HEADER.PRE_TITLE'} />
          </div>
          {/* <div className="intro-heading">It's Nice To Meet You</div> */}
        </div>
      </div>
    </header>
  )
}

export default Header

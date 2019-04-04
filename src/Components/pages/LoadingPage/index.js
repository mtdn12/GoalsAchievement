import React from 'react'
import { bool } from 'prop-types'
import './styles.css'
const LoadingPage = props => {
  if (props.error) {
    throw new Error(`Couldn't load LoadingPage`)
  }
  return (
    <div className="loadingPage-wrap">
      <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

LoadingPage.propTypes = {
  error: bool,
}

export default LoadingPage

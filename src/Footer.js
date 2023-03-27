import React from 'react'

const Footer = ({ itemsCount }) => {
  return (
    <footer>{itemsCount} item{itemsCount === 1 ? '' : 's'}</footer>
  )
}

export default Footer

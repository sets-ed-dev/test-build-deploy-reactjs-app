import React from 'react'

// You can use "props" React argument or "destructured-args".
const Header = ({title}) => {
  const headerStyle = {
    backgroundColor: 'royalblue',
    color: '#fff'
  };

  return (
    <header style={headerStyle}>
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Groceries List'
}

export default Header;

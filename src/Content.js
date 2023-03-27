import React from 'react'
import ItemList from './ItemList';

const Content = ({items, handleCheckItem, handleDeleteItem}) => {
  return (
    <main>
      {items.length
        ? <ItemList
            items={items}
            handleCheckItem={handleCheckItem}
            handleDeleteItem={handleDeleteItem}
          />
        : (
            <p style={{marginTop: '2rem'}}>
              YOUR LIST IS EMPTY!
            </p>
          )
      }
    </main>
  )
}

export default Content

import LineItem from './LineItem';

const ItemList = ({items, handleCheckItem, handleDeleteItem}) => {
  return (
    <ul>  
        {items.map((item) => (
          <LineItem
            key={item.id}
            item={item}
            handleCheckItem={handleCheckItem}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
    </ul>
  )
}

export default ItemList
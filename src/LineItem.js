import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({item, handleCheckItem, handleDeleteItem}) => {
  return (
    <li className='item'>
      <input
        type='checkbox'
        checked={item.checked}
        onChange={() => handleCheckItem(item.id)}
      />
      <label
        style={item.checked ? {textDecoration: 'line-through'} : null}
        onDoubleClick={() => handleCheckItem(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        role='button'
        tabIndex='0'
        aria-label={`Delete ${item.item}`}
        onClick={() => handleDeleteItem(item.id)}
      />
    </li>
  )
}

export default LineItem

import { useState, useEffect } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {
  const GroceryList_LS_KEY = 'GroceryList';
  const [items, setItems] = useState(JSON.parse(localStorage.getItem(GroceryList_LS_KEY)) || []);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  
  // console.log('Before useEffect');
  useEffect(() => {
    // W/O DEPENDENCIES = EVERYTIME WHEN COMPONENT RENDERS SOMETHING.
    // console.log('RENDER !!!!!!');
    // [] = ONLY FOR INITIAL LOAD COMPONENT.
    // console.log('LOADING READY !!!!!!');
    // [state] = ONLY FOR STATE CHANGES INTO COMPONENT.
    // console.log('Updating items !!!!!!');
    // This hook is asynchronus.
    // console.log('Inside useEffect');
    // useEffect is excellent to bring it on data from API.
    // setItems(JSON.parse(localStorage.getItem(GroceryList_LS_KEY)));

    localStorage.setItem(GroceryList_LS_KEY, JSON.stringify(items));
  }, [items]);
  // console.log('After useEffect');

  const handleCheckItem = (id) => {
    const itemList = items.map((item) => item.id === id
      ? {...item, checked: !item.checked}
      : item
    );
    setItems(itemList);
  }

  const handleDeleteItem = (id) => {
    const itemList = items.filter((item) => item.id !== id);
    setItems(itemList);
  }

  const addNewItem = (item) => {
    const id = items.length
      ? items[items.length - 1].id + 1
      : 1;
    const myNewItem = {
      id: id,
      checked: false,
      item: item
    }
    const itemList = [...items, myNewItem];
    setItems(itemList);
  }

  const handleSubmit = (e) => {
    // For preventing refresh page after submit event.
    e.preventDefault();

    if (!newItem)
      return;
    
    addNewItem(newItem);

    // Let form blank.
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Groceries to-buy" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        searchItem={searchItem}
        setSearchItem = {setSearchItem}
      />
      <Content
        items={items.filter((item) => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
        handleCheckItem={handleCheckItem}
        handleDeleteItem={handleDeleteItem}
      />
      <Footer
        itemsCount={items.length}
      />
    </div>
  );
}

export default App;

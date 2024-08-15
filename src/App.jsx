import { useState } from "react";
import Form from "./Form";
import ItemsList from "./ItemsList";
import Stats from "./Stats";

function App() {
  const [newItems, setNewItem] = useState([]);


  function handleAddItem(item) {
    setNewItem((currentItem) => [...currentItem, item]);
  }

  function handleDeleteItem(id) {
    setNewItem((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setNewItem((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }
  return (
    <div className="bg-pinkishGray container mx-auto mt-10 max-w-lg rounded-xl px-8 py-10 text-gray-200">
      <Form onAddItem={handleAddItem} />

      <hr className="mx-8 mt-10 border-t-2 border-pink-400" />
      <ItemsList
        newItems={newItems}
        onDeleteItem={handleDeleteItem}
        onToggle={handleToggle}
      />

      <Stats  newItems={newItems}/>
    </div>
  );
}
export default App;

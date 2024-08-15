import Item from "./Item";

// const items = [
//   { id: 1, description: "shampoo", checked: true },
//   { id: 2, description: "soap", checked: false },
// ];

function ItemsList({ newItems, onDeleteItem, onToggle }) {
  return (
    <>
      <h2 className="mb-4 mt-7 text-2xl">Shopping List</h2>
      <ul className="flex-flex-col space-y-5">
        {newItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  );
}

export default ItemsList;

import { useState } from "react";

import { FaTrashCan } from "react-icons/fa6";

function Item({ item, onDeleteItem, onToggle }) {
  return (
    <li
      className={`grid grid-cols-[auto_1fr_auto] gap-4 text-2xl ${item.checked ? "line-through" : ""}`}
    >
      <input
        type="checkbox"
        className="accent-pink-400"
        value={item.checked}
        onChange={() => onToggle(item.id)}
      />

      <p>{item.description}</p>

      <div>
        <button onClick={() => onDeleteItem(item.id)}>
          <FaTrashCan className="hover:text-pink-500" />
        </button>
      </div>
    </li>
  );
}

export default Item;

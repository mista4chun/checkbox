import { useState } from "react";

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { id: Date.now(), description, checked: false };

    onAddItem(newItem);
    setDescription("");
  }
  return (
    <form className="flex items-center justify-between" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add to list..."
        className="bg-pinkishGray border-none pl-3 text-2xl outline-none"
      />
      <button className="flex items-center justify-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 text-white">
          <span className="-mt-0.5 text-2xl">+</span>
        </div>
      </button>
    </form>
  );
}

export default Form;

function Stats({ newItems }) {
  if (!newItems.length)
    return (
      <p className="mt-8 text-center text-2xl text-pink-100">
        Please add items to shop for 🛒️
      </p>
    );

  const numItems = newItems.length;
  const completedItems = newItems.filter((item) => item.checked).length;
  const percentage = Math.round((completedItems / numItems) * 100);

  return (
    <footer className="mt-6 flex items-center justify-end text-pink-100">
      <em>
        {percentage === 100
          ? "You've completed your shopping list 👍️"
          : `Completed Items: ${completedItems}(${percentage}%)`}
      </em>
    </footer>
  );
}

export default Stats;

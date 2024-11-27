import { useState } from "react";

function TodoForm() {
  // State to hold the list of to-do items
  const [todoItems, setTodoItems] = useState<string[]>([]);
  // State to hold the current value of the input field
  const [inputValue, setInputValue] = useState("");

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload
    if (inputValue.trim() !== "") {
      setTodoItems([...todoItems, inputValue]); // Add new item to the list
      setInputValue(""); // Clear the input field
    }
  };

  // Handler for deleting a todo item
  const handleDelete = (index: number) => {
    // Remove the item at the specified index
    const newTodoItems = todoItems.filter((_, i) => i !== index);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <h1>My To-Do List</h1>
      <form className="row g-3 " onSubmit={handleSubmit}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            id="inputText"
            placeholder="What would you like to do today?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update input value
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Add
          </button>
        </div>
      </form>
      {/* Display the list of to-do items */}
      <ul className="list-group">
        {todoItems.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {index + 1}.{item}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoForm;

import React from "react";

function App() {
  const items = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Practice Props" },
    { id: 3, text: "Understand Hooks" },
  ];

  return (
    <div>
      <h1>List and Keys Lab</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text} 
            <button>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {items.length}</p>
    </div>
  );
}

export default App;



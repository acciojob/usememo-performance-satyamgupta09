import { useEffect, useMemo, useState } from "react";

export default function List() {
  const [list, setList] = useState([{ item: "", status: false }]);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const newList = [];
    for (let i = 1; i <= 50; i++) {
      newList.push({
        item: `item ${i}`,
        status: i % 2 === 0 ? false : true,
      });
    }
    setList(newList);
  }, []);

  function handleSee() {
    console.log(list);
  }

  handleFilter = (type) => {
    for (let i = 0; i < 10000; i++) {}

    setFilter(type);
  };

  const filteredList = useMemo(() => {
    if (filter === "all") {
      return list;
    } else if (filter === "active") {
      return list.filter((task) => task.status === true);
    } else {
      return list.filter((task) => task.status === false);
    }
  }, [list, filter]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      style={{
        background: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div>
        <button onClick={() => handleFilter("all")}>All</button>
        <button onClick={() => handleFilter("active")}>Active</button>
        <button onClick={() => handleFilter("completed")}>Completed</button>
      </div>
      <hr />
      <p>
        <strong>Note: List is artifically slow down</strong>
      </p>
      <ul>
        {filteredList.map((todo, index) => (
          <li key={index}>{todo.item}</li>
        ))}
      </ul>
    </div>
  );
}

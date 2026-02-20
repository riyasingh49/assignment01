import React, { useEffect, useRef, useState } from "react";
import useDebounce from "./hooks/Debounce";
import useLocalStorage from "./hooks/UseLocalStorage";

const SearchApp = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastquery, setLastQuery] = useLocalStorage("lastQuery", "");
  const [inputValue, setInputValue] = useState(lastquery);
  const debouncedQuery = useDebounce(inputValue, 500);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setLastQuery(debouncedQuery);
  }, [debouncedQuery]);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch todos");
        setLoading(false);
      });
  }, []);

  const filtered = todos.filter((todo) =>
    todo.title.toLowerCase().includes(debouncedQuery.toLowerCase())
  );
  return (
    <div>
      <h1>Todo Search</h1>
      <div>
        <input
          type="text"
          placeholder="Search todos..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue && (
          <button onClick={() => setInputValue("")}> delete </button>
        )}

        {/* debounce query */}
        {debouncedQuery && (
          <p>
            Showing results for: "{debouncedQuery}" &nbsp;.&nbsp;{" "}
            {filtered.length} found
          </p>
        )}
        {/* loading */}
        {loading && (
            <p>Fetching Todos.....</p>
        )}

        {/* error */}
        {error && <p> {error}</p>}
        {/* no result found */}

        {!loading && !error && debouncedQuery && filtered.length === 0 && (
            <>
             <p>No result</p>
             <p>No todos match "{debouncedQuery}"</p>
            </>
           
        )}

        {/* showing grid */}
        {!loading && !error && 
            filtered.slice(0,50).map((todo, i) => (
                <div key={todo.id}>
                        <p>  {todo.id} User  {todo.title}  &nbsp;&nbsp;&nbsp;&nbsp; Status: {todo.completed?" Done": " Pending"}</p>
                        
                </div>
            ))
        }
      </div>
      {!loading && filtered.length > 50 && (
          <p>
            Showing 50 of {filtered.length} results
          </p>
        )}
      </div>

  );
};

export default SearchApp;

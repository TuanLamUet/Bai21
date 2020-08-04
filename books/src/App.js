import React, { useEffect, useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import axios from "axios";

import SearchInput from "./components/Search";
import Book from "./components/Book";

function App() {
  const onSearch = (value) => {
    console.log(value);
  };
  const [books, setBooks] = useState([{ id: 0, title: "", desc: "", url: "" }]);
  const getBooks = async () => {
    try {
      const result = await axios.get(
        "https://principled-subdued-promotion.glitch.me/api/books"
      );
      setBooks(result.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);
  return (
    <div style={{ padding: "50px" }}>
      <SearchInput onSearch={onSearch} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((item) => {
          return (
            <Book
              key={item.id}
              title={item.title}
              desc={item.desc}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

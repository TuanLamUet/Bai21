import React from "react";
import { Input } from "antd";

const { Search } = Input;
const SearchInput = ({ onSearch }) => {
  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      name="bookTitle"
      onSearch={onSearch}
    />
  );
};

export default SearchInput;

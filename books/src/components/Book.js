import React from "react";
import { Card } from "antd";
const Book = ({ title, desc, url }) => {
  return (
    <Card
      hoverable
      title={title}
      style={{ width: "200px", margin: "10px" }}
      cover={<img alt="book" src={url} />}
    >
      <Card.Meta description={desc} />
    </Card>
  );
};

export default Book;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleBook from "../components/Book/Book";
import PageLayout from "../components/PageLayout/PageLayout";

const FinishedBooks = () => {
  const books = useSelector((state) => state.books.finishedList);
  return (
    <PageLayout>
      {books.length ? (
        books.map((book) => <SingleBook book={book} key={book.id} />)
      ) : (
        <p>
          Hey there! This is where books will go when you've finished reading
          them. Get started by heading over to the <Link to="/">Discover</Link>{" "}
          page to add books to your list.
        </p>
      )}
    </PageLayout>
  );
};

export default FinishedBooks;

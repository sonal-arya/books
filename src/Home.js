import React from "react";
import "./App.css";
import items from "./utils/data";
import { useState } from "react";
import Categories from "./components/Sidebar";
import Books from "./components/Chapter";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

const allCategories = [
  "selected",
  ...new Set(items.map((item) => item.subject)),
];
const Home = () => {
  const [bookItems, setBookItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const selectedBooks = useSelector((state) => state.chapterSelect.chapterList);
  console.log("List of books", selectedBooks);
  const filterItems = (subject) => {
    if (subject === "selected") {
      console.log("!@#",selectedBooks);
      setBookItems(selectedBooks);
      console.log("$%%^",setBookItems);
      return;
    }
    const newItems = items.filter((item) => {
     const subItem =  item.subject === subject;
     return subItem
    });
    setBookItems(newItems);
    // console.log(":",newItems);
  };
  console.log("booksitems", items.chapter);
  return (
    <main className="grid">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div className="sidebar">
            <Categories categories={categories} filterItems={filterItems} />
          </div>
        </Grid>
        <Grid item xs={7}>
          <section className="menu section">
            <Books
              className="book-style"
              categories={categories}
              items={bookItems}
              key={bookItems.id}
            />
          </section>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;

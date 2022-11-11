import React from "react";
import "./App.css";
import items from "./utils/data";
import { useState } from "react";
import Categories from "./components/Sidebar";
import Books from "./components/Chapter";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import { Category } from "@mui/icons-material";
const allCategories = [
  "selected",
  ...new Set(items.map((item,index) => item.subject)),
];
const Home = () => {
  const [bookItems, setBookItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const selectedBooks = useSelector((state) => state.chapterSelect.chapterList);
  // console.log("List of books", selectedBooks);
  const [value ,setValue] = useState("All") 
  const [index, setIndex] = useState(0);

  const filterItems = (subject) => {
    if (subject === "selected") {
      setBookItems(selectedBooks);
      setValue(subject)
      return;
    }
    const newItems = items.filter((item) => {
      const subItem = item.subject === subject;
      return subItem;
    });
    setValue(subject)
    setBookItems(newItems);
      };
      console.log(categories);
  console.log("value",value);
  const nxtChapter = () => {
    setIndex((allCategories) => {
      let newIndex = categories + 1;
      console.log("newIndex",newIndex);
      return newIndex;
    });
  };
  return (
    <main className="grid">
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <div className="sidebar">
            <Categories categories={categories} filterItems={filterItems} value={value} />
          </div>
        </Grid>
        <Grid item xs={7}>
          <section className="menu section">
            <div className="title">
                <h3>{value}</h3>
              <div className="underline">
              </div>
            </div>
            <Books
              className="book-style"
              // categories={categories}
              // filterItems={filterItems}
              items={bookItems}
              key={bookItems.id}
            />
          </section>
          <div className="btn-next">
          <Button variant="contained" color="success" 
          // onClick={prevChapter}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={nxtChapter}
          >
            Next
          </Button>
        </div>
        </Grid>
      </Grid>
    </main>
  );
};

export default Home;

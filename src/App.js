import "./App.css";
import items from "./utils/data";
import { useState } from "react";
import Categories from "./components/Categories";
import Books from "./components/Books";
import { Button } from "@mui/material";
const allCategories = ["selected", ...new Set(items.map((item) => item.subject))];
console.log(allCategories);
function App() {
  const [bookItems, setBookItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
 
  const filterItems = (subject) => {
    console.log("#",subject)
    if (subject === "yes") {
      setBookItems(items);
      return;
    }
    const newItems = items.filter((item) => item.subject === subject);
    setBookItems(newItems);
  }; 
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>BOOKS</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Books  items={bookItems} key={bookItems.id} />
      </section>
    </main>
  );
}

export default App;

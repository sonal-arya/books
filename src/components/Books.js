import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveChapter } from "../features/chapterSlice";

const Books = ({ items }) => {
  const [select, setSelect] = useState([]);
  const dispatch = useDispatch();
  const addChapter = () => {
    // console.log(`Adding ${input}`);
    dispatch(
      saveChapter({
        book: items.subject,
        chapter: items.chapter,
       value:value,
        select: false,
        id: Date.now(),
      })
    );
  };
  return (
    <div className="section-center">
      {items.map((bookItem) => {
        const { id, chapter, desc } = bookItem;
        return (
          <article key={id} className="menu-item">
            <FormControl>
              <div className="item-info">
                <header>
                  <h4 onClick={console.log("Chapter")}>Chapter - {chapter}</h4>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    className="flex column"
                    // onClick={e => (console.log("selected",{chapter},{select}))}
                  >
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                      onClick={(e) => setSelect(e.target.value)}
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                      onClick={(e) => setSelect(e.target.value)}
                    />
                  </RadioGroup>
                </header>
                <p className="item-text">{desc}</p>
              </div>
            </FormControl>
          </article>
        );
      })}
      <Button
        className="submit-btn"
        variant="contained"
        color="success"
        onClick={addChapter}
      >
        Submit
      </Button>
    </div>
  );
};

export default Books;
